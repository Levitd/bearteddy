import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validator } from "../../api/utils/validator";
import TextField from "../common/form/textField";
// import api from "../../api";
// import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
// import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
import { FormattedMessage } from "react-intl";
import * as utils from "../../api/utils/util";

const RegisterForm = ({ user }) => {
    const [data, setData] = useState({
        flName: "",
        email: "",
        password: "",
        sex: "male",
        licence: false
    });
    const navigate = useNavigate();

    // const [qualities, setQualities] = useState({});
    // const [professions, setProfession] = useState([]);
    // useEffect(() => {
    // api.professions.fetchAll().then((data) => setProfession(data));
    // api.qualities.fetchAll().then((data) => setQualities(data));
    // }, []);
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

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
        // profession: {
        //     isRequired: { message: "Обязательно выберите вашу профессию" }
        // },
        licence: {
            isRequired: { message: <FormattedMessage id='registration_is_not_possible_without_accepting_the_license_agreement' /> }
        }
    };

    useEffect(() => { validate(); }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (!isValid) return;
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
        <form onSubmit={handleSubmit}>
            <TextField
                label={<FormattedMessage id='your_first_and_last_name' />}
                name="flName"
                value={data.flName}
                onChange={handleChange}
                error={errors.flName}
            />
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
            {/* <SelectField
                options={professions}
                onChange={handleChange}
                defaultOption="Выберите..."
                error={errors.profession}
                value={data.profession}
                label="Выберите вашу профеcсию"
                name="profession "
            /> */}
            <RadioField
                options={[
                    { name: <FormattedMessage id='male' />, value: "male" },
                    { name: <FormattedMessage id='female' />, value: "female" }
                ]}
                value={data.sex}
                onChange={handleChange}
                name="sex"
                label={<FormattedMessage id='choose_your_gender' />}
            />
            {/* <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите Ваши качества"
                defaultValue={data.qualities}
            /> */}
            <CheckBoxField
                value={data.licence}
                onChange={handleChange}
                name="licence"
                error={errors.licence}
            >
                <FormattedMessage id='accept' /> <a><FormattedMessage id='license_agreement' /></a>
            </CheckBoxField>
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto"><FormattedMessage id='registration' /></button>
        </form>
    </>
    );
};

export default RegisterForm;
