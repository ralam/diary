import { getEntryByDate } from '../reducers/selectors';
import * as APIUtil from '../util/api_util';

export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
// export const FETCH_ENTRY = 'FETCH_ENTRY';

export const receiveEntry = entry => ({
    type: RECEIVE_ENTRY,
    entry
});

export const receiveEntries = entries => ({
    type: RECEIVE_ENTRIES,
    entries
})

// export const fetchEntry = date => dispatch => ({
//     type: FETCH_ENTRY,
//     entry: getEntryByDate(date)
// })

export const fetchEntries = () => dispatch => (
    APIUtil.fetchEntries()
        .then(entries => dispatch(receiveEntries(entries)))
);

export const fetchEntry = id => dispatch => (
    APIUtil.fetchEntry(id)
        .then(entry => dispatch(receiveEntry(entry)))
        // .then(entry => console.log(entry))
)