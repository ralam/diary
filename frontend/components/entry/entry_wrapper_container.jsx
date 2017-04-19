import { connect } from 'react-redux';
import EntryWrapper from './entry_wrapper';

import { allEntries, getDates } from '../../reducers/selectors';
import { formatDate } from '../../util/date_util';
import { fetchEntries, fetchEntry } from '../../actions/entry_actions';
import { receiveDate, receiveDates } from '../../actions/date_actions';
import { logout } from './../../actions/session_actions';

const mapStateToProps = (state, {today}) => ({
    entries: allEntries(state),
    dates: getDates(state),
    today,
    selectedDate: state.date,
    session: state.session
});

const mapDispatchToProps = dispatch => ({
    requestAllEntries: () => dispatch(fetchEntries()),
    requestEntry: id => dispatch(fetchEntry(id)),
    receiveDate: date => dispatch(receiveDate(date)),
    receiveDates: dates => dispatch(receiveDates(dates)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryWrapper);