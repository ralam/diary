import { connect } from 'react-redux';

import ActiveEntryItem from './active_entry_item';

const defaultEntry = {
    id: 1,
    content: '',
    create_date: new Date()
};

const mapStateToProps = (state, {entry = defaultEntry, hasEntry}) => ({
    hasEntry: hasEntry,
    entry: entry
})

export default connect(
    mapStateToProps
)(ActiveEntryItem);