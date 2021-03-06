import * as APIUtil from '../util/api_util';

export const RECEIVE_ENTRY = 'RECEIVE_ENTRY';
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES';
export const RESET_ENTRY = 'RESET_ENTRY';
export const RESET_ENTRIES = 'RESET_ENTRIES'

export const receiveEntry = entry => ({
    type: RECEIVE_ENTRY,
    entry
});

export const receiveEntries = entries => ({
    type: RECEIVE_ENTRIES,
    entries
})

export const resetEntry = () => ({
    type: RESET_ENTRY
})

export const resetEntries = () => ({
    type: RESET_ENTRIES
})

export const fetchEntries = () => dispatch => (
    APIUtil.fetchEntries()
        .then(entries => dispatch(receiveEntries(entries)))
);

export const fetchEntry = id => dispatch => (
    APIUtil.fetchEntry(id)
        .then(entry => dispatch(receiveEntry(entry)))
)

export const createEntry = entry => dispatch => (
    APIUtil.addEntry(entry)
        .then(entry => dispatch(receiveEntry(entry)))
)

export const updateEntry = (entry, id) => dispatch => (
    APIUtil.updateEntry(entry, id)
        .then(entry => dispatch(receiveEntry(entry)))
)
