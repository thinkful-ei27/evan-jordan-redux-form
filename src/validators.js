
export const required = value => value ? undefined : 'Required';

export const fiveLong = value => value.length === 5 ? undefined : 'Must be exactly 5 characters long'; 

export const isNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;