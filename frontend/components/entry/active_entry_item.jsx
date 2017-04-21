import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

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
            <div>
                <span>{formatToHumanDate(this.props.date)}</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">              
                        <textarea 
                            rows='5'
                            placeholder={this.state.content ? '' : 'Today, I...'}
                            value={this.state.content}
                            onChange={this.linkState('content')}
                            className='form-control'></textarea>
                    </div>
                    <div className="form-group">   
                        <input type='submit' value='Save' className='form-control'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ActiveEntryItem;