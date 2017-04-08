import { connect } from 'react-redux';
import EntryWrapper from './entry_wrapper';

import { allEntries, getDates } from '../../reducers/selectors';
import { formatDate } from '../../util/date_util';

const mapStateToProps = (state, {today}) => ({
    entries: allEntries(state),
    dates: getDates(state),
    today: formatDate(today)
});

export default connect(
    mapStateToProps
)(EntryWrapper);