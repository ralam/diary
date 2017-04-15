import { connect } from 'react-redux';

import ActiveEntryItem from './active_entry_item';
import { fetchEntry } from '../../actions/entry_actions';
import { getIdByDate } from '../../reducers/selectors';

const mapStateToProps = (state, {date, hasEntry}) => ({
    id: getIdByDate(state, date),
    hasEntry: hasEntry,
    entry: state.entry
})

const mapDispatchToProps = dispatch => ({
    requestEntry: id => dispatch(fetchEntry(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActiveEntryItem);