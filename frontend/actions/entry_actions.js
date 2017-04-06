import { getEntryByDate } from '../reducers/selectors';

export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
// export const FETCH_ENTRY = 'FETCH_ENTRY';

export const receiveEntry = entry => ({
    type: RECEIVE_ENTRY,
    entry
});

// export const fetchEntry = date => dispatch => ({
//     type: FETCH_ENTRY,
//     entry: getEntryByDate(date)
// })