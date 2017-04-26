import React from 'react';

class SessionForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginGuest = this.loginGuest.bind(this);
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = this.state;
        if(e.currentTarget.id === 'signup') {
            this.props.signup({user});
        } else {
            this.props.login({user});
        }
    }

    loginGuest(e) {
        e.preventDefault();
        this.props.login({user: {username: 'guest', password: 'password'}});
    }

    renderErrors() {
        return(
            <ul className='list-unstyled'>
                {this.props.errors.map((errorText, i) => (
                    <li className='bg-danger' key={`error-${i}`}>{errorText}</li>
                ))}
            </ul>
        )
    }

    render() {
        return(
            <div>
                {this.renderErrors()}
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                    <input type='text'
                            id='username'
                            value={this.state.username}
                            onChange={this.linkState('username')}
                            required='true'
                            className='form-control'></input>
                </div>
                <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input type='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.linkState('password')}
                        required='true'
                        className='form-control'></input>
                </div>
                <button onClick={this.handleSubmit}
                    id='login'
                    className='btn btn-primary btn-block'>Log in</button>
                <button onClick={this.handleSubmit}
                    id='signup'
                    className='btn btn-primary btn-block'>Sign Up</button>
                <button onClick={this.loginGuest}
                    className='btn btn-info btn-block'>Log in as guest</button>
            </div>
        )
    }
}

export default SessionForm;