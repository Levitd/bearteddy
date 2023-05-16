import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error, noValid, noLable, placeholder, labelLeft, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "form-control" + ((noValid) ? "" : (error) ? " is-invalid" : " is-valid");
    };
    const togleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (<div className="mb-4 ">
        {!noLable ? <label htmlFor={name}>{label}</label> : ""}

        <div className="input-group has-validation">
            {labelLeft && (<span className="input-group-text" >{labelLeft}</span>)}
            <input
                type={showPassword ? "text" : type}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                className={getInputClasses()}
                {...rest}
            />
            {type === "password" &&
                (<button className="btn btn-outline-secondary" type="button" onClick={togleShowPassword}>
                    <i className={"bi bi-eye" + (showPassword ? "-slash" : "")} ></i>
                </button>)}
            {!noValid && error && <div className="invalid-feedback">{error}</div>}
        </div>
    </div >);
};

TextField.defaultProps = {
    type: "text",
    noLable: false,
    noValid: false,
    placeholder: ""
};

TextField.propTypes = {
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    noLable: PropTypes.bool,
    noValid: PropTypes.bool,
    placeholder: PropTypes.string
};

export default React.memo(TextField);
