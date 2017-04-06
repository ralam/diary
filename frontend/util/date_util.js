const monthsMap = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const formatToHumanDate = dateObj => {
    return `${daysMap[dateObj.getDay()]}, ${monthsMap[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`
}