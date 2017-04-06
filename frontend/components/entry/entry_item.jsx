import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EntryItem extends React.Component{
    constructor(props) {
        super(props);
        this.showDate = this.showDate.bind(this);
    }

    showDate(e) {
        console.log(e.currentTarget.value);
    }

    render() {
        return(
            <div>
                <section>{formatToHumanDate(this.props.entry.create_date)}</section>
                <section>{this.props.entry.content}</section>
                <input
                    type='date'
                    defaultValue={this.props.entry.create_date.toISOString().slice(0, 10)}
                    onChange={this.showDate} />
            </div>
        )
    }
}

export default EntryItem;