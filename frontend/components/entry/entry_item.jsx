import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EntryItem extends React.Component{
    componentDidMount() {
        this.props.requestEntry(this.props.id);
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