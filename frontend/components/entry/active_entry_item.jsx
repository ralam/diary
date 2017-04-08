import React from 'react';

class ActiveEntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.entry.content
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.hasEntry) {
            console.log('PUT request');
        } else {
            console.log('POST request');
        }
    }

    fetchPlaceholder() {
        if(this.props.hasEntry) {
            return ''
        } else {
            return 'Today, I...'
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    rows='5'
                    cols='50' 
                    placeholder={this.fetchPlaceholder()}
                    value={this.state.content}
                    onChange={this.linkState('content')}></textarea>
                <input type='submit' value='Save' />
            </form>
        )
    }
}

export default ActiveEntryItem;