import { connect } from 'react-redux';

import ActiveEntryItem from './active_entry_item';
import { fetchEntries, fetchEntry, resetEntry } from '../../actions/entry_actions';
import { getIdByDate, getDates } from '../../reducers/selectors';

const mapStateToProps = (state, {date}) => ({
    id: getIdByDate(state, date),
    entry: state.entry,
    date
})

const mapDispatchToProps = dispatch => ({
    requestAllEntries: () => dispatch(fetchEntries()),
    requestEntry: id => dispatch(fetchEntry(id)),
    resetEntry: () => dispatch(resetEntry())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveEntryItem);