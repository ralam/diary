import { connect } from 'react-redux';

import NewEntryItem from './new_entry_item';
import { fetchEntries, createEntry } from '../../actions/entry_actions';
import { getIdByDate, getDates } from '../../reducers/selectors';

const mapStateToProps = (state, {date}) => ({
    date,
    userId: state.session.currentUser.id
})

const mapDispatchToProps = dispatch => ({
    createEntry: entry => dispatch(createEntry(entry)),
    requestAllEntries: () => dispatch(fetchEntries()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewEntryItem);