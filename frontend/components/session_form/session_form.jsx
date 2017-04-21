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
        if(e.currentTarget.id === 'signup') {
            this.props.signup({user});
        } else {
            this.props.login({user});
        }
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
                    className='btn btn-default btn-block'>Login</button>
                <button onClick={this.handleSubmit}
                    id='signup'
                    className='btn btn-default btn-block'>Sign Up</button>
            </div>
        )
    }
}

export default SessionForm;