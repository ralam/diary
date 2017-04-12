import { combineReducers } from 'redux';
import entriesReducer from './entries_reducer';
import entryDetailReducer from './entry_detail_reducer';

const rootReducer = combineReducers({
    entries: entriesReducer,
    entry: entryDetailReducer
});

export default rootReducer;