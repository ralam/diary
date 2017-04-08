import { RECEIVE_ENTRY } from  '../actions/entry_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        content: 'current entry',
        create_date: new Date()
    },
    2: {
        id: 1,
        content: 'older entry',
        create_date: new Date(2017, 3, 4)
    },
    3: {
        id: 1,
        content: 'oldest entry',
        create_date: new Date(2017, 3, 3)
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