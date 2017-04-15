import { RECEIVE_DATE } from  '../actions/date_actions';
import merge from 'lodash/merge';

const datesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_DATE:
            return action.date;
        default:
            return state;
    }
}

export default datesReducer;