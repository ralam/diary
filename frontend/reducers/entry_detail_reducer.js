import { RECEIVE_ENTRY } from '../actions/entry_actions';
import merge from 'lodash/merge';

const entryDetailReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ENTRY:
            const newEntry = merge({}, state, action.entry)
            console.log(newEntry)
            return newEntry
        default:
            return state;
    }
}

export default entryDetailReducer;