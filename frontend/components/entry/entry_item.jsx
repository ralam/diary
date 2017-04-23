import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EntryItem extends React.Component{
    componentDidMount() {
        this.props.requestEntry(this.props.id);
    }

    render() {
        return(
            <div className='entry-container'>
                <section>{formatToHumanDate(this.props.entry.create_date)}</section>
                <section className='entry-content'>{this.props.entry.content}</section>
            </div>
        )
    }
}

export default EntryItem;