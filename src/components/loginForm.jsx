import React, {Component} from "react";
import Input from "./common/input";
import joi from 'joi-browser'

class LoginForm extends Component {
    state = {
        account: {
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
        const {account, errors} = this.state ;
        return (
            <React.Fragment>
            <h1>Login</h1>
            <form className="col-5 forms" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={account.username}
                    error={errors.username}
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    value={account.password}
                    error={errors.password}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </React.Fragment>
        );
    }

    validate = () => {
        const options = {abortEarly: false};
        const {account} = this.state;
        const {error} = joi.validate(account, this.schema, options);
        if(!error) return {};

        const errors = {};
        error.details.map(item => errors[item.path[0]] = item.message);
        return errors;
    }

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]}
        const {error} = joi.validate(obj, schema);
        return (error) ? error.details[0].message : null ;
    }

    handleSubmit = e => {
        e.preventDefault();     // prevents the default behaviour [full reload]

        const errors = this.validate();
        console.log(errors);
        this.setState({errors});

        // then we should call the server to save the changes then redirect
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }
}

export default LoginForm;