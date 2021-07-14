import React, { Component } from 'react';

import './sign-in.styles.scss';


class SignIn extends Component {

    constructor(props){
        super(props);

        this.state = [{
            email: '',
            password: ''
        }]
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState(
            {
                email : '',
                password: ''
            }
        )
    }

    handleChange = (event) => {

        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
            <div className='sign-in'>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    name='email' type='email'
                    value={this.state.email} required
                    onChange= {this.handleChange}>
                    </input>
                    <label> Email </label>
                    <input 
                    name='password' type='password'
                    value={this.state.password} required
                    onChange= {this.handleChange}>
                    </input>
                    <label> Password </label>
                    <input type='submit' value="Submit Form"></input>
                </form>
                
            </div>
        );
    }
}

export default SignIn;