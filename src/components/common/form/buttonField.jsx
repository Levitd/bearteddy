import React from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";

const ButtonField = ({ type, label, colorButton = "btn-primary", addClass = "", ...rest }) => {
    // console.log({ ...rest });
    const intl = useIntl();
    if (!label) {
        if (type === "submit") {
            label = "save";
        } else if (type === "cancel") {
            label = "cancel";
        } else {
            label = "label_not_transmitted";
        }
    }
    const labelButton = intl.messages[label];
    return (
        <button type={type} className={"btn w-100 mx-auto " + colorButton + " " + addClass} {...rest}>{labelButton}</button>
    );
}
ButtonField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
}

export default ButtonField;
