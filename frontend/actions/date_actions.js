export const RECEIVE_DATE = 'RECEIEVE_DATE';
export const RECEIVE_DATES = 'RECEIEVE_DATEs';

export const receiveDate = date => ({
    type: RECEIVE_DATE,
    date
})

export const receiveDates = dates => ({
    type: RECEIVE_DATES,
    dates
})