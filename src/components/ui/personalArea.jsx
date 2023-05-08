import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import * as utils from "../../api/utils/util";
import { redirect, useNavigate } from "react-router-dom";
import { validator } from "../../api/utils/validator";
import TextField from "../common/form/textField";
import RadioField from "../common/form/radioField";
import CheckBoxField from "../common/form/checkBoxField";

const PersonalArea = () => {
    const navigate = useNavigate();
    const user = utils.getStorage('user_activ');
    console.log(user);

    if (!user) {
        navigate("../not_registered");
    }
    const savedData = {
        flName: user[0].flName,
        email: user[0].email,
        password: user[0].password,
        sex: user[0].sex,
        licence: user[0].licence
    };

    const [data, setData] = useState(savedData);
    useEffect(() => { validate(); }, [data]);

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
            }
            // hasEmail: {
            //     message: <FormattedMessage id='the_specified_address_is_already_registered' />
            // }
        },
        password: {
            isRequired: {
                message: <FormattedMessage id='password_is_required' />
            },
            isCapitalSymbol: { message: <FormattedMessage id='password_must_contain_at_least_1_capital_letter' /> },
            isContainDogit: { message: <FormattedMessage id='password_must_contain_at_least_1_number' /> },
            min: { message: <FormattedMessage id='password_must_be_at_least_8_characters' />, value: 7 }
        }
    };

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
        // console.log('data', data.email);
        // const hasUser = utils.hasUser(data.email);
        // if (hasUser === -1) {
        //     let users = utils.getStorage('users');
        //     if (!users) users = [];
        //     if (utils.setStorage('users', [...users, data])) {
        //         // пользователь зарегистрировался, сразу залогинем его
        //         utils.setStorage('user_activ', [data]);
        //         navigate("/successful_registration");
        //     }
        // }
    };
    const handleCancel = (e) => {
        setData(savedData);
    };
    const handleLogout = (e) => {
        utils.setStorageRemove("user_activ");
        document.querySelector(".nav-item_login").classList.toggle("d-none");
        document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
        navigate("/");
    };
    /*
                <div className="alert alert-dark" role="alert">
                    <FormattedMessage id='personal_area' />
                </div>
    
    */

    return (
        <div className="main">
            <h1 className="headPage"><FormattedMessage id='personal_area' /></h1>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-md-3 offset-sm-2 offset-lg-4 offset-xl-4 p-4 shadow">
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
                        {/* <TextField
                    label={<FormattedMessage id='password' />}
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                /> */}
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
                        {/* <CheckBoxField
                    value={data.licence}
                    onChange={handleChange}
                    name="licence"
                    error={errors.licence}
                >
                    <FormattedMessage id='accept' /> <a><FormattedMessage id='license_agreement' /></a>
                </CheckBoxField> */}
                        <div className="flex_row">
                            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto"><FormattedMessage id='save_changes' /></button>
                            <button onClick={handleCancel} type="button" className="btn btn-primary w-100 mx-auto"><FormattedMessage id='cancel_changes' /></button>
                        </div>
                        <div>
                            <button onClick={handleLogout} type="button" className="btn btn-danger w-100 mx-auto mt-2"><FormattedMessage id='logout' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PersonalArea;