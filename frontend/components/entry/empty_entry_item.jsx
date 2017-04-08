import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EmptyEntryItem extends React.Component{
    render() {
        return(
            <div>
                <section>{formatToHumanDate(new Date(this.props.date))}</section>
                <section>No entry for this date.</section>
            </div>
        )
    }
}

export default EmptyEntryItem;