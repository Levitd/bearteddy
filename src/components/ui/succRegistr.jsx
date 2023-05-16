import React, { useEffect } from "react";
import * as utils from "../../utils/util";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SuccRegistr = () => {
    const user = utils.getStorage('user_activ');
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            // return redirect("/not-registered"); // Не могу заставить работать
            navigate("/not-registered");
        }
    }, [user]);
    if (user) {
        return (
            <div className="alert alert-success" role="alert">
                <FormattedMessage id='you_have_successfully_registered' />!
                <div><FormattedMessage id='go' /> <Link to="/"><FormattedMessage id='to_main' /></Link></div>
            </div>
        );
    }
}

export default SuccRegistr;