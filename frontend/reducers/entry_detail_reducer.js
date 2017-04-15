import { RECEIVE_ENTRY, RESET_ENTRY } from '../actions/entry_actions';
import merge from 'lodash/merge';

const entryDetailReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ENTRY:
            return merge({}, state, action.entry)
        case RESET_ENTRY:
            return action.entry;
        default:
            return state;
    }
}

export default entryDetailReducer;