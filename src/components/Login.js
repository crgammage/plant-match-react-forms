import React from 'react';

class Login extends React.Component {
    state = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
        // TODO: What needs to be represented in state for a fully controlled form?
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        if (this.state.password === this.state.confirmPassword) {
            this.props.changeView('home')
        } else {
            alert("Password and Confirm Password must match.")
        }
        
    }
    // TODO: What methods need to be created for a fully controlled form?
    // HINT: Use the line below to change the view when the form is submitted
    // this.props.changeView('home')

    render(){
        // TODO: What additional attributes and event handlers are needed on each of the elements below?
        return (
            <form className="vertical-flex" onSubmit={this.handleSubmit}>
                <h2>Create an Account</h2>
                <input type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} placeholder="Name"/>
                <input type="text" name="username" value={this.state.username} onChange={event => this.handleChange(event)} placeholder="Username"/>
                <input type="password" name="password" value={this.state.password} onChange={event => this.handleChange(event)} placeholder="Password"/>
                <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={event => this.handleChange(event)} placeholder="Confirm Password"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Login;