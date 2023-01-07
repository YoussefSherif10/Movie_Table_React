import React, {Component} from "react";

class LoginForm extends Component {
    state = {
        account: {
          username: '',
          password: '',
        },
    };
    render() {
        return (
            <React.Fragment>
            <h1>Login</h1>
            <form className="col-5 forms" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp"
                           placeholder="Enter username" value={this.state.account.username}
                           onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
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

    handleChange = e => {
        const account = {...this.state.account};
        account.username = e.currentTarget.value;
        this.setState({account});
    }
}

export default LoginForm;