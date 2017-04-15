import { combineReducers } from 'redux';

import entriesReducer from './entries_reducer';
import entryDetailReducer from './entry_detail_reducer';
import datesReducer from './dates_reducer';

const rootReducer = combineReducers({
    entries: entriesReducer,
    entry: entryDetailReducer,
    date: datesReducer
});

export default rootReducer;