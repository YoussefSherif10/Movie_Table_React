import React, {Component} from "react";
import Input from "./common/input";

class LoginForm extends Component {
    state = {
        account: {
          username: '',
          password: '',
        },

        errors: {},
    };
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
        const errors = {} ;
        const {account} = this.state;
        if(account.username.trim() === '')
            errors.username = 'Username is required';
        if(account.password.trim() === '')
            errors.password = 'Password is required';

        return Object.keys(errors).length === 0 ? {} : errors ;
    }

    validateProperty = ({name, value}) => {
        if(name === 'username'){
            if(value === '') return 'Username is required';
        }
        if(name === 'password'){
            if(value === '') return 'Password is required';
        }
    }

    handleSubmit = e => {
        e.preventDefault();     // prevents the default behaviour [full reload]

        const errors = this.validate();
        this.setState({errors});
        if(errors) return ;

        // then we should call the server to save the changes then redirect
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(errors);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account, errors});
    }
}

export default LoginForm;