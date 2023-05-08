import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const NotRegistered = () => {
    return (
        <>
            <div className="main">
                <div className="alert alert-warning" role="alert">
                    <FormattedMessage id='you_are_not_registered_or_not_logged_in' />
                </div>
                <div><Link to="../login"><FormattedMessage id='login' /></Link></div>
            </div>
        </>
    );
}

export default NotRegistered;