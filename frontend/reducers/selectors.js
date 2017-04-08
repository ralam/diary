import values from 'lodash';
import { formatDate } from '../util/date_util'

export const allEntries = ({ entries }) => entries;

export const getEntryFromState = ({ entries }, date = new Date()) => {
    let matchingEntry = {
        id: null,
        content: 'No entry for this date',
        create_date: date
    };
    const formattedDate = date.toISOString().slice(0,10);
    Object.keys(entries).forEach(id => {
        const entry = entries[id];
        const entryDate = entry.create_date.toISOString().slice(0,10);
        if (entryDate === formattedDate) {
            matchingEntry = entry;
        }
    });

    return matchingEntry;
}

export const getDates = ({entries}) => {
    let dates = {};
    Object.keys(entries).forEach(id => {
        dates[formatDate(entries[id].create_date)] = id
    });

    return dates;
}

export const getEntryByDate = ({ entries }, date = new Date()) => {
    let matchingEntry = {
        id: null,
        content: 'No entry for this date',
        create_date: date
    };
    const formattedDate = date.toISOString().slice(0,10);
    Object.keys(entries).forEach(id => {
        const entry = entries[id];
        const entryDate = entry.create_date.toISOString().slice(0,10);
        if (entryDate === formattedDate) {
            matchingEntry = entry;
        }
    });

    return matchingEntry;
}
