import React, {Component} from "react";
import joi from "joi-browser";
import Input from "./input";

class Form extends Component {
    state = {
        data: {},
        errors: {},
    };


    validate = () => {
        const options = {abortEarly: false};
        const {data} = this.state;
        const {error} = joi.validate(data, this.schema, options);
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

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    }

    renderButton = label => {
       return <button type="submit" className="btn btn-primary">{label}</button>;
    }

    renderInput = (name, type) => {
        return <Input
            type={type}
            name={name}
            onChange={this.handleChange}
            value={this.state.data[name]}
            error={this.state.errors[name]}
        /> ;
    }
}

export default Form;