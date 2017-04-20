import React from 'react';
import { isEmpty } from 'lodash';

class ActiveEntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            entry: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.id === '-1') {
            this.setState({content: ''})
        } else {
            this.props.requestEntry(this.props.id)
                .then(action => this.setState({content: action.entry.content, entry: action.entry}))
        }
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.props.id === '-1') {
            const newEntry = {
                content: this.state.content,
                create_date: this.props.date,
                user_id: this.props.userId
            };
            this.props.createEntry(newEntry)
                .then(action => {
                    this.setState({content: action.entry.content});
                    this.props.requestAllEntries();
                })
        } else {
            const updatedEntry = {
                content: this.state.content,
                create_date: this.props.create_date
            };
            this.props.updateEntry(updatedEntry, this.props.id)
                .then(action => this.setState({content: action.entry.content}))
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea 
                    rows='5'
                    cols='50' 
                    placeholder={this.state.content ? '' : 'Today, I...'}
                    value={this.state.content}
                    onChange={this.linkState('content')}></textarea>
                <input type='submit' value='Save' />
            </form>
        )
    }
}

export default ActiveEntryItem;