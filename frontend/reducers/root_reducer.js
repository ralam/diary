import { combineReducers } from 'redux';

import entriesReducer from './entries_reducer';
import entryDetailReducer from './entry_detail_reducer';
import datesReducer from './dates_reducer';
import sessionReducer from './session_reducer'

const rootReducer = combineReducers({
    entries: entriesReducer,
    entry: entryDetailReducer,
    date: datesReducer,
    session: sessionReducer
});

export default rootReducer;