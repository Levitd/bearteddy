import React from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";

const ButtonField = ({ type, label, addClass }) => {
    const intl = useIntl();
    if (!label && type === "submit") {
        label = "save_changes";
    } else if (!label && type === "cancel") {
        label = "cancel_changes";
    }
    const labelButton = intl.messages[label];
    return (
        <button type={type} className={"btn btn-primary w-100 mx-auto " + addClass}>{labelButton}</button>
    );
}
ButtonField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string
}

export default ButtonField;
