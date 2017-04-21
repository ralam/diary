import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import { isEmpty } from 'lodash';

import { formatDate } from '../../util/date_util';
import EntryItemContainer from './entry_item_container';
import EmptyEntryItem from './empty_entry_item';
import ActiveEntryItemContainer from './active_entry_item_container';
import NewEntryItemContainer from './new_entry_item_container';
import { unsetSession, storeSession } from '../../util/session_storage_util';

class EntryWrapper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: formatDate(new Date())
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.props.requestAllEntries();
        this.props.receiveDate(formatDate(new Date()));
        storeSession(this.props.session);
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
            return <NewEntryItemContainer date={this.props.selectedDate} />
        } else if(this.props.selectedDate === this.props.today) {
            return <ActiveEntryItemContainer date={this.props.selectedDate} />
        } else if (entryId === '-1') {
            return <EmptyEntryItem date={this.props.selectedDate} />
        } else {
            return <EntryItemContainer date={this.props.selectedDate} />
        }   
    }

    handleLogout() {
        unsetSession();
        this.props.resetEntry();
        this.props.logout();
    }

    render() {
        return(
            <div>
                { this.getEntry() }
                <div className='calendar-container'>
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
                <button onClick={this.handleLogout} className='btn btn-default btn-block'>Logout</button>
            </div>
        )
    }
}

export default EntryWrapper;