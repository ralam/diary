import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
    currentUser: null,
    errors: []
}

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const currentUser = action.currentUser;
            return merge({}, _nullUser, {currentUser});
        case LOGOUT:
            return _nullUser;
        case RECEIVE_ERRORS:
            const errors = action.errors;
            return merge({}, _nullUser, {errors});
        default:
            return state;
    }
};

export default sessionReducer