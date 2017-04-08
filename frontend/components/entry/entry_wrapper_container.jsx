import { connect } from 'react-redux';
import EntryWrapper from './entry_wrapper';

import { allEntries, getDates } from '../../reducers/selectors';

const mapStateToProps = state => ({
    entries: allEntries(state),
    dates: getDates(state)
});

export default connect(
    mapStateToProps
)(EntryWrapper);