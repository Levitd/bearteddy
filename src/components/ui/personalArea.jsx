import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import * as utils from "../../utils/util";
import { redirect, useNavigate } from "react-router-dom";
import FormComponent, { TextField, RadioField, CheckBoxField, SubmitCancelButton, ButtonField } from "../common/form";


const PersonalArea = ({ user }) => {
    const navigate = useNavigate();
    if (!user) {
        user = utils.getStorage('user_activ');
    }
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

    // const [data, setData] = useState(savedData);
    // useEffect(() => { validate(); }, [data]);

    // const [errors, setErrors] = useState({});

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
            }
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

    const handleSubmit = (e) => {
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

    const handleLogout = (e) => {
        utils.setStorageRemove("user_activ");
        user = false;
        document.querySelector(".nav-item_login").classList.toggle("d-none");
        document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
        navigate("/");
    };

    // const Buttons = SubmitCancelButton("save_changes", "cancel_changes", "submitCancelButton");
    // console.log(Buttons);
    return (
        <div className="main">
            <h1 className="headPage"><FormattedMessage id='personal_area' /></h1>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-md-3 offset-sm-2 offset-lg-4 offset-xl-4 p-4 shadow">
                    <FormComponent onSubmit={handleSubmit}
                        validatorConfig={validatorConfig}
                        defaultData={savedData}
                    >
                        <TextField
                            label={<FormattedMessage id='your_first_and_last_name' />}
                            name="flName"
                            autoFocus
                        />
                        <TextField
                            label={<FormattedMessage id='email' />}
                            name="email"
                        />
                        <RadioField
                            options={[
                                { name: <FormattedMessage id='male' />, value: "male" },
                                { name: <FormattedMessage id='female' />, value: "female" }
                            ]}
                            name="sex"
                            label={<FormattedMessage id='choose_your_gender' />}
                        />
                        {/* <Buttons name="Buttons" /> */}
                        <SubmitCancelButton name="submitCancelButton">
                            <ButtonField type="submit" name="submit" />
                            <ButtonField type="cancel" name="cancel" addClass={"mb-5"} />
                        </SubmitCancelButton>
                        {/* <div className="flex_row"> */}
                        {/* <button type="submit" className="btn btn-primary w-100 mx-auto mb-2"><FormattedMessage id='save_changes' /></button>
                        <button type="cancel" className="btn btn-primary w-100 mx-auto"><FormattedMessage id='cancel_changes' /></button> */}
                        {/* </div> */}
                        <button onClick={handleLogout} type="button" className="btn btn-danger w-100 mx-auto mt-2"><FormattedMessage id='logout' /></button>
                    </FormComponent>
                </div>
            </div>
        </div>
    );
}

export default PersonalArea;