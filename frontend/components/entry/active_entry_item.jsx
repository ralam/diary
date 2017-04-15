import React from 'react';
import { isEmpty } from 'lodash';

class ActiveEntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO: create resetEntry action to clear entry if id = -1
    componentDidMount() {
        if(this.props.id === '-1') {
            this.props.resetEntry();
        } else {
            this.props.requestEntry(this.props.id);
        }
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (_.isEmpty(this.props.entry)) {
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
                    value={this.props.entry ? this.props.entry.content : "Loading"}
                    onChange={this.linkState('content')}></textarea>
                <input type='submit' value='Save' />
            </form>
        )
    }
}

export default ActiveEntryItem;