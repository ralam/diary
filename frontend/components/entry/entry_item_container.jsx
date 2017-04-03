import { connect } from 'react-redux';
import { receiveEntry } from '../../actions/entry_actions';
import EntryItem from './entry_item';

import { getEntryByDate } from '../../reducers/selectors';

const mapStateToProps = state => ({
    entry: getEntryByDate(state)
});

const mapDispatchToProps = dispatch => ({
    receiveEntry: (entry) => dispatch(receiveEntry(entry))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EntryItem);