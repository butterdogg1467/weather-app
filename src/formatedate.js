export default function formatDate(inputDate) {
    const parts = inputDate.split('-')
    const year = parseInt(parts[0])
    const month = parseInt(parts[1])
    const day = parseInt(parts[2]) 
    
    const date = new Date(year, month -1, day)

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const monthName = monthNames[date.getMonth()]

    const formattedDate = `${monthName} ${day}, ${year}`
    return formattedDate
}   