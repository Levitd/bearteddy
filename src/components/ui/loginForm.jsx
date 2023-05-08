import React, { useEffect, useState } from "react";
import { validator } from "../../api/utils/validator";
import TextField from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";
import { FormattedMessage } from "react-intl";
import * as utils from "../../api/utils/util";
import { useNavigate } from "react-router-dom";

// import * as yup from "yup";

const LoginForm = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const [errors, setErrors] = useState({});

    // const validateScheme = yup.object().shape({
    //     password: yup.string().required("Пароль обязателен для заполнения").matches(/^(?=.*[A-Z])/, "Пароль должен содержать хотя бы 1 заглавную букву")
    //         .matches(/(?=.*[0-9])/, "Пароль должен содержать хотя бы 1 цифру")
    //         .matches(/(?=.*[!@#$%^&*])/, "Пароль должен содержать один спец символов: !@#$%^&* ")
    //         .matches(/(?=.{8,})/, "Пароль должен быть не менее 8 символов"),
    //     email: yup.string().required("Электронная почта обязательна для заполнения").email("Email введен некорректно")
    // });

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
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

    useEffect(() => { validate(); }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        // validateScheme.validate(data).then(() => setErrors({})).catch((err) => setErrors({ [err.path]: err.message }));
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        const user = utils.hasUser(data.email, data.password);
        if (user) {
            utils.setStorage('user_activ', [user]);
            document.querySelector(".nav-item_login").classList.toggle("d-none");
            document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
            navigate("/");
        }
    };
    return (<>
        <form onSubmit={handleSubmit}>
            <TextField
                label={<FormattedMessage id='email' />}
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label={<FormattedMessage id='password' />}
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                <FormattedMessage id='remain_in_the_system' />
            </CheckBoxField>

            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto"><FormattedMessage id='login' /></button>
        </form>
    </>
    );
};

export default LoginForm;
