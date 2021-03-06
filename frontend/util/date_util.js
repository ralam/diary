const monthsMap = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const formatToHumanDate = dateStr => {
    let dateObj = new Date(dateStr);
    const now = new Date();
    const timeZoneOffset = now.getTimezoneOffset();
    dateObj = new Date(dateObj.getTime() + timeZoneOffset*60000);
    return `${daysMap[dateObj.getDay()]}, ${monthsMap[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}

export const formatDate = dateObj => {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    let dateString = `${year}-`;
    if(month < 10) {
        dateString += '0';
    }
    dateString += `${month}-`;
    if(day < 10) {
        dateString += '0';
    }
    dateString += `${day}`;

    return dateString;
}