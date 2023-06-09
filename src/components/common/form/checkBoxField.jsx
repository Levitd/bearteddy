import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error, ...rest }) => {
    const handleChange = () => {
        onChange({
            name: name,
            value: !value
        });
    };
    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : " is-valid");
    };
    return (
        <div className="form-check mb-4">
            <input
                className={getInputClasses()}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
                {...rest}
            ></input>
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {
                error && <div className="invalid-feedback">
                    {error}
                </div>
            }
        </div>
    );
};

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default React.memo(CheckBoxField);
