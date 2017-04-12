import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EntryItem extends React.Component{
    componentDidMount() {
        this.props.requestEntry(this.props.id);
    }

    getEntryDate() {
        if(this.props.entry === undefined) {
            return '';
        }
        return this.props.entry.create_date;
    }

    getEntryContent() {
        if(this.props.entry === undefined) {
            return '';
        }
        return this.props.entry.content;
    }

    render() {
        return(
            <div>
                <section>Entry Item</section>
                <section>{this.props.entry ? this.props.entry.create_date : "Loading"}</section>
                <section>{this.props.entry ? this.props.entry.content : "Loading"}</section>
            </div>
        )
    }
}

export default EntryItem;