import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import FormComponent, { TextField, CheckBoxField, GrouplButton, ButtonField } from "../common/form";

import { FormattedMessage } from "react-intl";
import * as utils from "../../utils/util";
import { useNavigate } from "react-router-dom";
import { useUser } from "hooks/useUsers";

// import * as yup from "yup";

const LoginForm = ({ user }) => {
    const navigate = useNavigate();

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
            },
            hasEmail: {
                message: <FormattedMessage id='the_specified_address_is_not_registered' />
            }
        },
        password: {
            isRequired: {
                message: <FormattedMessage id='password_is_required' />
            },
            isCapitalSymbol: { message: <FormattedMessage id='password_must_contain_at_least_1_capital_letter' /> },
            isContainDogit: { message: <FormattedMessage id='password_must_contain_at_least_1_number' /> },
            min: { message: <FormattedMessage id='password_must_be_at_least_8_characters' />, value: 8 }
        }
    };

    const { users, findUser } = useUser();

    const handleSubmit = (data) => {
        // user = utils.hasUser(data.email, data.password);
        user = findUser({ params: { "email": data.email, "password": data.password } });
        // if (user) {
        //     utils.setStorage('user_activ', [user]);
        //     document.querySelector(".nav-item_login").classList.toggle("d-none");
        //     document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
        //     navigate("/");
        // }
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
            />
            <TextField
                label={<FormattedMessage id='password' />}
                type="password"
                name="password"
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
