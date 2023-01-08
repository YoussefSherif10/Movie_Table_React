import React from "react";
import joi from 'joi-browser';
import Form from "./common/form";

class RegisterForm extends Form {
    state = {
        data: {
            email: '',
            password: '',
            name: '',
        },

        errors: {},
    };

    // define a schema for the form fields
    schema = {
        email: joi.string().email().required().label('Email'),
        password: joi.string().min(5).required().label('Password'),
        name: joi.string().required().label('Username'),
    }

    render() {
        return (
            <React.Fragment>
                <h1>Register</h1>
                <form className="col-5 forms" onSubmit={this.handleSubmit}>
                    {this.renderInput('email', 'text')}
                    {this.renderInput('password', 'password')}
                    {this.renderInput('name', 'text')}
                    {this.renderButton("Login")}
                </form>
            </React.Fragment>
        );
    }
}

export default RegisterForm;