import React, { useState } from "react";
// import { validator } from "../../utils/validator";
import FormComponent, { TextField, CheckBoxField, GrouplButton, ButtonField } from "../common/form";

import { FormattedMessage, useIntl } from "react-intl";
// import * as utils from "../../utils/util";
import { useNavigate } from "react-router-dom";
// import { useUser } from "hooks/useUsers";
import { toast } from "react-toastify";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "hooks/useAuth";

// import * as yup from "yup";

const LoginForm = ({ user, appFB }) => {
    const { signIn } = useAuth();
    const intl = useIntl();
    const navigate = useNavigate();
    // const location = useLocation();
    const [errors, setErrors] = useState({});
    const [enrerError, setEnterError] = useState(null);

    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });

    // const validateScheme = yup.object().shape({
    //     password: yup.string().required("Пароль обязателен для заполнения").matches(/^(?=.*[A-Z])/, "Пароль должен содержать хотя бы 1 заглавную букву")
    //         .matches(/(?=.*[0-9])/, "Пароль должен содержать хотя бы 1 цифру")
    //         .matches(/(?=.*[!@#$%^&*])/, "Пароль должен содержать один спец символов: !@#$%^&* ")
    //         .matches(/(?=.{8,})/, "Пароль должен быть не менее 8 символов"),
    //     email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введен некорректно")
    // });

    const validatorConfig = {
        email: {
            isRequired: {
                message: <FormattedMessage id='email_is_required' />
            },
            isEmail: {
                message: <FormattedMessage id='email_entered_incorrectly' />
            }
            // hasEmail: {
            //     message: <FormattedMessage id='the_specified_address_is_not_registered' />
            // }
        },
        password: {
            isRequired: {
                message: <FormattedMessage id='password_is_required' />
            },
            isCapitalSymbol: { message: <FormattedMessage id='password_must_contain_at_least_1_capital_letter' /> },
            isContainNumber: { message: <FormattedMessage id='password_must_contain_at_least_1_number' /> },
            min: { message: <FormattedMessage id='password_must_be_at_least_8_characters' />, value: 8 }
        }
    };

    // const { foundUser, findUser } = useUser();

    const handleSubmit = async (data) => {
        try {
            await signIn(data);
            console.log(navigate.current);
            // navigate(navigate.location.state ? navigate.location.state.from.pathname : "/");
            navigate("/");
        } catch (error) {
            if (error.message) {
                setEnterError(error.message);
            } else {
                setErrors(error);
            }
        }
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        setEnterError(null);
    };

    const recalculation = (data) => {
        return (data);
    }
    return (<>
        <FormComponent onSubmit={handleSubmit}
            validatorConfig={validatorConfig}
            defaultData={data}
            recalculation={recalculation}
        >
            <TextField
                label={<FormattedMessage id='email' />}
                name="email"
                autoFocus
                onChange={handleChange}
            />
            <TextField
                label={<FormattedMessage id='password' />}
                type="password"
                name="password"
                onChange={handleChange}
            />
            <CheckBoxField
                name="stayOn"
            >
                <FormattedMessage id='remain_in_the_system' />
            </CheckBoxField>
            <GrouplButton>
                <ButtonField name="submit" type="submit" label="login" />
            </GrouplButton>
        </FormComponent>
    </>
    );
};

export default LoginForm;
