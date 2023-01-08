import React from "react";
import joi from 'joi-browser'
import Form from "./common/form";

class LoginForm extends Form {
    state = {
        data: {
          username: '',
          password: '',
        },

        errors: {},
    };

    // define a schema for the form fields
    schema = {
        username: joi.string().required().label('Username'),
        password: joi.string().required().label('Password'),
    }

    render() {
        return (
            <React.Fragment>
            <h1>Login</h1>
            <form className="col-5 forms" onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'text')}
                {this.renderInput('password', 'password')}
                {this.renderButton("Login")}
            </form>
            </React.Fragment>
        );
    }
}

export default LoginForm;