import React from "react";
// import { ButtonField } from "./fields";

const SubmitCancelButton = ({ children, name = "submitCancelButton" }) => {
    return (
        <div id="submitCancel" className="flex_row" name={name}  >
            {children}
            {/* <ButtonField label={textSubmit} type="submit" name="submit" />
            <ButtonField label={textCancel} type="cancel" name="cancel" addClass={"mb-5"} /> */}
        </div>
    );
}

export default SubmitCancelButton;
