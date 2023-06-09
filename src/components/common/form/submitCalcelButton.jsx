import React from "react";
// import { ButtonField } from "./fields";

const SubmitCancelButton = ({ children, name = "submitCancelButton" }) => {
    return (
        <div id="submitCancel" className="flex_row" name={name}  >
            {children}
        </div>
    );
}

export default SubmitCancelButton;
