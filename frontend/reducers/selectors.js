export const allEntries = ({ entries }) => Object.keys(entries).map(id => entries[id]);

export const getEntryByDate = ({ entries }, date = new Date()) => {
    let matchingEntry = null;
    const formattedDate = date.toISOString().slice(0,10);
    // debugger
    Object.keys(entries).forEach(id => {
        const entry = entries[id];
        const entryDate = entry.createDate.toISOString().slice(0,10);
        if (entryDate === formattedDate) {
            matchingEntry = entry;
        }
    });

    return matchingEntry;
}