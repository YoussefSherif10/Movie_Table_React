import React from "react";

const Input = ({name, value, type, onChange, error}) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{name}</label>
        <input
            type={type}
            className="form-control"
            id={name}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={"Enter " + name}
        />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;