import React, {Component} from "react";
import Input from "./common/input";

class LoginForm extends Component {
    state = {
        account: {
          username: '',
          password: '',
        },
    };
    render() {
        const {account} = this.state ;
        return (
            <React.Fragment>
            <h1>Login</h1>
            <form className="col-5 forms" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={account.username}
                />
                <Input
                    name="password"
                    onChange={this.handleChange}
                    type="password"
                    value={account.password}
                />
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </React.Fragment>
        );
    }

    handleSubmit = e => {
        e.preventDefault();     // prevents the default behaviour [full reload]

        // then we should call the server to save the changes then redirect
        console.log('submited');
    }

    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }
}

export default LoginForm;