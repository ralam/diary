import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

import { formatDate } from '../../util/date_util';
import EntryItemContainer from './entry_item_container';
import EmptyEntryItem from './empty_entry_item';

class EntryWrapper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: formatDate(new Date())
        }
    }

    linkState(key) {
        return(moment => this.setState({[key]: formatDate(moment._d)}));
    }

    getEntryFromDate(date) {
        const entryId = this.props.dates[date] || '-1';
        if(entryId === '-1') {
            return <EmptyEntryItem date={this.state.selectedDate} />
        } else {
            return <EntryItemContainer entry={this.props.entries[entryId]} />
        }
    }

    render() {
        return(
            <div>
                { this.getEntryFromDate(this.state.selectedDate) }
                <SingleDatePicker
                    date={moment(this.state.selectedDate)} // momentPropTypes.momentObj or null
                    onDateChange={this.linkState('selectedDate')} // PropTypes.func.isRequired
                    focused={true} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    isDayHighlighted={day => this.props.dates.hasOwnProperty(formatDate(day._d))}
                    />
            </div>
        )
    }
}

export default EntryWrapper;