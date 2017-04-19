import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { isEmpty } from 'lodash';

import { formatDate } from '../../util/date_util';
import EntryItemContainer from './entry_item_container';
import EmptyEntryItem from './empty_entry_item';
import ActiveEntryItemContainer from './active_entry_item_container';

class EntryWrapper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: formatDate(new Date())
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount() {
        this.props.requestAllEntries();
        this.props.receiveDate(formatDate(new Date()));
    }

    linkState(key) {
        return(moment => this.setState({[key]: formatDate(moment._d)}));
    }

    handleDateChange(moment) {
        const formattedDate = formatDate(moment._d);
        const entryId = this.props.dates[formattedDate] || '-1';
        if(entryId !== '-1') {
            this.props.requestEntry(entryId)
        }

        this.props.receiveDate(formattedDate)
    }

    getEntry() {
        const entryId = this.props.dates[this.props.selectedDate] || '-1';
        if (_.isEmpty(this.props.dates)) {
            return <span>Loading</span>
        } else if(this.props.selectedDate === this.props.today) {
            return <ActiveEntryItemContainer date={this.props.selectedDate} />
        } else if (entryId === '-1') {
            return <EmptyEntryItem date={this.props.selectedDate} />
        } else {
            return <EntryItemContainer date={this.props.selectedDate} />
        }   
    }

    render() {
        return(
            <div>
                { this.getEntry() }
                <SingleDatePicker
                    date={moment(this.props.selectedDate)} // momentPropTypes.momentObj or null
                    onDateChange={moment => this.handleDateChange(moment)} // PropTypes.func.isRequired
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