import React from "react";

const Input = ({name, error , ...rest}) => {
    return (
        <div className="form-group">
        <label htmlFor={name}>{name}</label>
        <input
            {...rest}
            name={name}
            id={name}
            className="form-control"
            placeholder={"Enter " + name}
        />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;