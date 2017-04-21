import React from 'react';

import { formatToHumanDate } from '../../util/date_util';

class EmptyEntryItem extends React.Component{
    render() {
        return(
            <div>
                <section>{formatToHumanDate(this.props.date)}</section>
                <section className='entry-content'>No entry for this date.</section>
            </div>
        )
    }
}

export default EmptyEntryItem;