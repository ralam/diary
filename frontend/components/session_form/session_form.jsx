import React from 'react';

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        this.props.login({user});
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((errorText, i) => (
                    <li key={`error-${i}`}>{errorText}</li>
                ))}
            </ul>
        )
    }

    render() {
        console.log(this.props)
        return(
            <div>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                            id='username'
                            value={this.state.username}
                            onChange={this.linkState('username')}
                            required='true'></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                            id='password'
                            value={this.state.password}
                            onChange={this.linkState('password')}
                            required='true'></input>
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default SessionForm;