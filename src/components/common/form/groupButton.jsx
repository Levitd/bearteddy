import React from "react";
// import { ButtonField } from "./fields";

const GrouplButton = ({ children, name = "GrouplButton" }) => {
    return (
        <div id="submitCancel" className="flex_row" name={name}  >
            {children}
        </div>
    );
}

export default GrouplButton;
