import React from 'react';
import { isEmpty } from 'lodash';

class ActiveEntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.id === '-1') {
            this.props.resetEntry();
            this.setState({content: ''})
        } else {
            this.props.requestEntry(this.props.id)
                .then(action => this.setState({content: action.entry.content}))
        }
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.content)
        if (this.props.id === '-1') {
            console.log('POST request');
        } else {
            console.log('PUT request');
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    rows='5'
                    cols='50' 
                    placeholder={this.props.entry.content ? '' : 'Today, I...'}
                    value={this.state.content}
                    onChange={this.linkState('content')}></textarea>
                <input type='submit' value='Save' />
            </form>
        )
    }
}

export default ActiveEntryItem;