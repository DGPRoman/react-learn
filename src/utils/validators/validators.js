export const requiredField = value => {
    if (value) return undefined;

    return "Field is required!"
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `max lng is ${maxLength}`;

    return undefined;
}


export const maxLength30 = value => {
    if (value && value.length > 30) return "too long msg";

    return undefined;
}