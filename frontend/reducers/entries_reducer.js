import { RECEIVE_ENTRIES, RESET_ENTRIES } from  '../actions/entry_actions';
import merge from 'lodash/merge';

const initialState = {
    1: {
        id: 1,
        content: 'current entry',
        create_date: '2017-03-09'
    },
    2: {
        id: 1,
        content: 'older entry',
        create_date: '2017-03-04'
    },
    3: {
        id: 1,
        content: 'oldest entry',
        create_date: '2017-03-03'
    }
}

const entriesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_ENTRIES:
            return merge({}, action.entries);
        case RESET_ENTRIES:
            return {}
        default:
            return state;
    }
}

export default entriesReducer;