import { connect } from 'react-redux';

import { fetchEntry } from '../../actions/entry_actions';
import EntryItem from './entry_item';
import { getIdByDate } from '../../reducers/selectors';

const mapStateToProps = (state, {date}) => ({
    id: getIdByDate(state, date),
    entry: state.entry
});

const mapDispatchToProps = dispatch => ({
    requestEntry: id => dispatch(fetchEntry(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryItem);