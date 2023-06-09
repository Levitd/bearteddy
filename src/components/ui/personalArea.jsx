import React, {useEffect, useState} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import * as utils from "../../utils/util";
import { useNavigate } from "react-router-dom";
import FormComponent, {
    TextField,
    RadioField,
    SubmitCancelButton,
    ButtonField,
    GrouplButton,
    MessageWindow
} from "../common/form";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const PersonalArea = () => {
    const intl = useIntl();
    const today = utils.getDate("today");
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    let savedData;

    const auth = getAuth();
    const userActive = auth.currentUser;
    useEffect(()=>{
        if (!userActive){
            navigate("../not-registered");
        }
        setLoading(false);
    },[]);

    // useEffect(()=>{
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             userActive=user;
    //             setLoading(false);
    //             console.log(userActive, userActive.email);
    //             savedData = {
    //                 flName: user.flName = "",
    //                 email: user.email,
    //                 password: user.password = "",
    //                 sex: user.sex = "",
    //                 licence: user.licence = false,
    //                 dateOfBirth: user.dateOfBirth = "",
    //                 telegram: user.telegram = "",
    //             };
    //         } else {
    //             navigate("../not-registered");
    //         }
    //     });
    //
    // },[userActive]);

    if (!isLoading) {
        console.log(userActive);
        savedData = {
            flName: "",
            email: userActive.email,
            password: "",
            sex: "",
            licence: false,
            dateOfBirth: "",
            telegram: "",
        };
    }
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
            isContainNumber: { message: <FormattedMessage id='password_must_contain_at_least_1_number' /> },
            min: { message: <FormattedMessage id='password_must_be_at_least_8_characters' />, value: 7 }
        },
        dateOfBirth: {
            maxDate: { message: <FormattedMessage id='max_date_of_birth' /> }
        },
        telegram: {
            isLink: { message: <FormattedMessage id="link_is_incorrect" /> }
        }
    };

    const handleSubmit = (data) => {
        utils.updateUser(userActive, data);
        toast.info(intl.messages["data_saved"]);
        // utils.showMessage("", intl.messages["data_saved"], "danger");
    };

    const handleLogout = (e) => {
        utils.setStorageRemove("user_active");
        userActive = false;
        document.querySelector(".nav-item_login").classList.toggle("d-none");
        document.querySelector(".nav-item_personalArea").classList.toggle("d-none");
        navigate("/");
    };
    const recalculation = (data) => {
        const [age, letter] = utils.getFullYearOfBirth(data.dateOfBirth)
        if (age && letter) {
            data.fullYears = `${age} ${intl.messages[letter]}`;
        }
    }

    if (!isLoading && savedData) {
        console.log(savedData);
        return (
            <div className="main">
                <h1 className="headPage"><FormattedMessage id='personal_area'/></h1>
                <div className="row">
                    <div
                        className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-md-3 offset-sm-2 offset-lg-4 offset-xl-4 p-4 shadow">
                        <FormComponent onSubmit={handleSubmit}
                                       validatorConfig={validatorConfig}
                                       defaultData={savedData}
                                       recalculation={recalculation}
                        >
                            <TextField
                                label={<FormattedMessage id='your_first_and_last_name'/>}
                                name="flName"
                                autoFocus
                            />
                            <TextField
                                label={<FormattedMessage id='email'/>}
                                name="email"
                            />
                            <TextField
                                label={<FormattedMessage id='date_of_birth'/>}
                                name="dateOfBirth"
                                type="date"
                                max={today}
                            />
                            <TextField
                                label={<FormattedMessage id='full_years'/>}
                                name="fullYears"
                                readOnly="readonly"
                                disabled={true}
                                noValid={true}
                            />
                            <RadioField
                                options={[
                                    {name: <FormattedMessage id='male'/>, value: "male"},
                                    {name: <FormattedMessage id='female'/>, value: "female"}
                                ]}
                                name="sex"
                                label={<FormattedMessage id='choose_your_gender'/>}
                            />
                            <TextField
                                label={<FormattedMessage id='your_telegram_profile'/>}
                                labelLeft={<i className="bi bi-telegram icon-size-big"></i>}
                                type="text"
                                name="telegram"
                            />
                            <SubmitCancelButton name="submitCancelButton">
                                <ButtonField type="submit" name="submit" label="save_changes"/>
                                <ButtonField type="cancel" name="cancel" label="cancel_changes"/>
                            </SubmitCancelButton>
                            <MessageWindow label="data_saved" name="message" type="message"/>
                            <GrouplButton>
                                <ButtonField addClass={"mt-2"} type="button" name="logout" label="logout"
                                             onClick={handleLogout} colorButton="btn-danger"/>
                            </GrouplButton>
                        </FormComponent>
                    </div>
                </div>
            </div>
        );
    }
    // if (!userActive) {
    //     userActive = utils.getStorage('user_activ');
    // }
    // useEffect(() => {
    //     if (!userActive) {
    //         navigate("../not-registered");
    //     }
    // });
    // if (userActive) {
    // }
}

export default PersonalArea;
