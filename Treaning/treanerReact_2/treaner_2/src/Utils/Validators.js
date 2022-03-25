


export const maxLength = (maxLength) => {
    debugger
    return (value) => value.length > maxLength ? `max length ${maxLength} symbols` : undefined
}