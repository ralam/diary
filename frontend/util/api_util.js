export const fetchEntries = () => (
    $.ajax({
        url: '/api/entries',
        method: 'GET'
    })
)

export const fetchEntry = id => (
    $.ajax({
        url: `api/entries/${id}`,
        method: 'GET'
    })
)

export const addEntry = entry => (
    $.ajax({
        url: `api/entries`,
        method: 'POST',
        data: {entry}
    })
)

export const updateEntry = (entry, id) => (
    $.ajax({
        url: `api/entries/${id}`,
        method: 'PATCH',
        data: {entry}
    })
)