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

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text'
                        id='username'
                        value={this.state.username}
                        onChange={this.linkState('username')}></input>
                <label htmlFor='password'>Password</label>
                <input type='password'
                        id='password'
                        value={this.state.password}
                        onChange={this.linkState('password')}></input>
                <input type='submit' value='Login' />
            </form>
        )
    }
}

export default SessionForm;