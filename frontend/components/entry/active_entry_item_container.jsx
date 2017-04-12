import { connect } from 'react-redux';

import ActiveEntryItem from './active_entry_item';
import { fetchEntry } from '../../actions/entry_actions';

const defaultEntry = {
    id: 1,
    content: '',
    create_date: new Date()
};

const mapStateToProps = (state, {id, hasEntry}) => ({
    hasEntry: hasEntry
})

export default connect(
    mapStateToProps
)(ActiveEntryItem);