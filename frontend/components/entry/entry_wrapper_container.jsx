import { connect } from 'react-redux';
import EntryWrapper from './entry_wrapper';

import { allEntries, getDates } from '../../reducers/selectors';
import { formatDate } from '../../util/date_util';
import { fetchEntries, fetchEntry } from '../../actions/entry_actions';

const mapStateToProps = (state, {today, entry}) => ({
    entries: allEntries(state),
    dates: getDates(state),
    today: formatDate(today),
    entry: state.entry
});

const mapDispatchToProps = dispatch => ({
    requestAllEntries: () => dispatch(fetchEntries()),
    requestEntry: id => dispatch(fetchEntry(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryWrapper);