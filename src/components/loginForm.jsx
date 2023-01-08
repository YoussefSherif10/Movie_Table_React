import React from "react";
import Input from "./common/input";
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
        const {data, errors} = this.state ;
        return (
            <React.Fragment>
            <h1>Login</h1>
            <form className="col-5 forms" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={data.username}
                    error={errors.username}
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    value={data.password}
                    error={errors.password}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </React.Fragment>
        );
    }
}

export default LoginForm;