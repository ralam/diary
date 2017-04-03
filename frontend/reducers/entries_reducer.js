import { RECEIVE_ENTRY } from  '../actions/entry_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        content: 'lorem ipsum',
        createDate: new Date()
    }
}

const entriesReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_ENTRY:
            const newEntry = {[action.entry.id]: entry};
            return merge ({}, state, newEntry);
        default:
            return state;
    }
}

export default entriesReducer;