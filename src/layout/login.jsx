import React from "react";
import { FormattedMessage } from "react-intl";
// import { activeLink } from './utils/utils_dom';

const Login = () => {
    // activeLink(".nav-link", "login");
    return (

        <div className='login'>
            <h4>
                <div className='alert alert-info'><FormattedMessage id='login_or_register' /></div>
            </h4>
            <p>
                <FormattedMessage id='price_display' values={{ n: 59.99 }} />
            </p>
            <p>
                <FormattedMessage id='number_display' values={{ n: 2000 }} />
            </p>
            <p>
                <FormattedMessage id='start_today' values={{ d: new Date() }} />
            </p>
        </div>
    );
}

export default Login;