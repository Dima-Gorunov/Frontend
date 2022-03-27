export const MaxLengthCreator = (maxLength) => {
    return (value) => value.length > maxLength ? `max length ${maxLength} symbols` : undefined
}