import React from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

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
    }

    linkState(key) {
        return(moment => this.setState({[key]: formatDate(moment._d)}));
    }

    getEntryFromDate(date) {
        const entryId = this.props.dates[date] || '-1';
        if(entryId === '-1') {
            if (date === this.props.today) {
                return <ActiveEntryItemContainer hasEntry={false} />
            } else {
                return <EmptyEntryItem date={this.state.selectedDate} />
            }
        } else if (date === this.props.today) {
            return <ActiveEntryItemContainer entry={this.props.entries[entryId]} hasEntry={true} />
        } else {
            return <EntryItemContainer entry={this.props.entry} />
        }
    }

    handleDateChange(moment) {
        const formattedDate = formatDate(moment._d);
        const entryId = this.props.dates[formattedDate] || '-1';
        if(entryId !== '-1') {
            this.props.requestEntry(entryId).then(
                this.setState({selectedDate: formattedDate})
            )
        } else (
            this.setState({selectedDate: formattedDate})
        )
    }

    getEntry() {
        const entryId = this.props.dates[this.state.selectedDate] || '-1';
        if(entryId === '-1') {
            if (this.state.selectedDate === this.props.today) {
                return <ActiveEntryItemContainer hasEntry={false} />
            } else {
                return <EmptyEntryItem date={this.state.selectedDate} />
            }
        } else if(this.props.entry === undefined) {
            return <EmptyEntryItem date={this.state.selectedDate} />
        } else if(this.state.selectedDate === this.props.today) {
            return <ActiveEntryItemContainer hasEntry={true} entry={entry} />
        } else {
            return <EntryItemContainer date={this.state.selectedDate} />
        }   
    }

    render() {
        return(
            <div>
                {/*<EntryItemContainer date={this.state.selectedDate}/>*/}
                { this.getEntry() }
                <SingleDatePicker
                    date={moment(this.state.selectedDate)} // momentPropTypes.momentObj or null
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