import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import FormComponent, { TextField, RadioField, CheckBoxField } from "../common/form";
import { FormattedMessage } from "react-intl";
import * as utils from "../../utils/util";

const RegisterForm = ({ user }) => {
    const [data, setData] = useState({
        flName: "",
        email: "",
        password: "",
        sex: "male",
        licence: false
    });
    const navigate = useNavigate();


    // const handleChange = (target) => {
    //     setData((prevState) => ({
    //         ...prevState,
    //         [target.name]: target.value
    //     }));
    // };

    const validatorConfig = {
        flName: {
            isRequired: {
                message: <FormattedMessage id='flName_is_required' />
            },
            min: { message: <FormattedMessage id='flName_must_be_at_least_2_characters' />, value: 1 }
        },
        email: {
            isRequired: {
                message: <FormattedMessage id='email_is_required' />
            },
            isEmail: {
                message: <FormattedMessage id='email_entered_incorrectly' />
            },
            hasNotEmail: {
                message: <FormattedMessage id='the_specified_address_is_already_registered' />
            }
        },
        password: {
            isRequired: {
                message: <FormattedMessage id='password_is_required' />
            },
            isCapitalSymbol: { message: <FormattedMessage id='password_must_contain_at_least_1_capital_letter' /> },
            isContainDogit: { message: <FormattedMessage id='password_must_contain_at_least_1_number' /> },
            min: { message: <FormattedMessage id='password_must_be_at_least_8_characters' />, value: 7 }
        },
        licence: {
            isRequired: { message: <FormattedMessage id='registration_is_not_possible_without_accepting_the_license_agreement' /> }
        }
    };

    const handleSubmit = (data) => {
        console.log('data', data.email);
        const hasEmail = utils.hasEmail(data.email);
        if (hasEmail === -1) {
            let users = utils.getStorage('users');
            if (!users) users = [];
            if (utils.setStorage('users', [...users, data])) {
                // пользователь зарегистрировался, сразу залогинем его
                utils.setStorage('user_activ', [data]);
                user = utils.hasUser(data.email, data.password);
                document.querySelector(".nav-item_login").classList.toggle("d-none");
                document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
                navigate("/successful_registration");
            }
        }
    };
    return (<>
        <FormComponent onSubmit={handleSubmit}
            validatorConfig={validatorConfig}
            defaultData={data}
        >
            <TextField
                label={<FormattedMessage id='your_first_and_last_name' />}
                name="flName"
            />
            <TextField
                label={<FormattedMessage id='email' />}
                name="email"
            />
            <TextField
                label={<FormattedMessage id='password' />}
                type="password"
                name="password"
            />
            <RadioField
                options={[
                    { name: <FormattedMessage id='male' />, value: "male" },
                    { name: <FormattedMessage id='female' />, value: "female" }
                ]}
                value={data.sex}
                label={<FormattedMessage id='choose_your_gender' />}
                name="sex"
            />
            <CheckBoxField
                name="licence"
            // error={errors.licence}
            >
                <FormattedMessage id='accept' /> <a><FormattedMessage id='license_agreement' /></a>
            </CheckBoxField>
            <button type="submit" className="btn btn-primary w-100 mx-auto"><FormattedMessage id='registration' /></button>
        </FormComponent>
    </>
    );
};

export default RegisterForm;
