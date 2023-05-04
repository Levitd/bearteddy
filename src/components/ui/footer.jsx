import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural, FormattedMessage } from "react-intl";

const Footer = () => {
    const count = 125;
    return (
        <div className="footer">
            <div className="app_footer">
                <div className='mt app_footer_grid'>
                    {/* ... */}

                    <FormattedDate value={Date.now()} />
                    <br />
                    <FormattedNumber value={2000} />
                    <br />
                    <FormattedPlural value={5} one='1 click' other='5 clicks' />
                    <br />
                    <FormattedMessage id="click_count" values={{ count }} />
                </div>
            </div>
        </div>
    )
};

export default Footer;
