import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";
import { FormattedMessage } from "react-intl";
// import { activeLink } from './utils/utils_dom';

// <FormattedMessage id='login_or_register' />

const Login = ({ user }) => {
    console.log(user);
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");

    const togleFormType = () => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-md-3 offset-sm-2 offset-lg-4 offset-xl-4 p-4 shadow">
                    {formType === "register"
                        ? <>
                            <h3 className="mb-4"><FormattedMessage id='registration' /></h3>

                            <RegisterForm user={user} />
                            <p className="mt-2"><FormattedMessage id='already_registered' />? <button type="button" className="btn btn-link" onClick={togleFormType}><FormattedMessage id='login' /></button></p>
                        </>
                        : <>
                            <h3 className="mb-4"><FormattedMessage id='login' /></h3>
                            <LoginForm user={user} />
                            <p className="mt-2"><FormattedMessage id='not_registered' />?<button type="button" className="btn btn-link" onClick={togleFormType}><FormattedMessage id='registration' /></button></p>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Login;