import { connect } from 'react-redux';

import ActiveEntryItem from './active_entry_item';
import { fetchEntries, fetchEntry } from '../../actions/entry_actions';
import { getIdByDate, getDates } from '../../reducers/selectors';

const mapStateToProps = (state, {date}) => ({
    id: getIdByDate(state, date),
    entry: state.entry,
    date: date
})

const mapDispatchToProps = dispatch => ({
    requestAllEntries: () => dispatch(fetchEntries()),
    requestEntry: id => dispatch(fetchEntry(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveEntryItem);