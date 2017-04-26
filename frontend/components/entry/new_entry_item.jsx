import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class NewEntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    linkState(key) {
        return event => this.setState({[key]: event.currentTarget.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const newEntry = {
            content: this.state.content,
            create_date: this.props.date,
            user_id: this.props.userId
        };
        this.props.createEntry(newEntry)
            .then(action => {
                this.setState({content: action.entry.content});
                this.props.requestAllEntries();
            });
    }

    render() {
        return(
            <div>
                <span>{formatToHumanDate(this.props.date)}</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">         
                    <textarea 
                        rows='5'
                        cols='50' 
                        placeholder='Today, I..'
                        value={this.state.content}
                        onChange={this.linkState('content')} className='form-control'></textarea>
                    </div>
                    <div className="form-group">   
                        <input type='submit' value='Save' className='form-control'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewEntryItem;