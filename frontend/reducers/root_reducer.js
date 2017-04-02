import { combineReducers } from 'redux';
import entriesReducer from './entries_reducer';

const rootReducer = combineReducers({
    entries: entriesReducer
});

export default rootReducer;