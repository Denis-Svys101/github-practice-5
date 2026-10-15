function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    return input;
}

function main(input) {
    try {
        const validatedInput = validateInput(input);
        return `Hello ${validatedInput}!`;
    } catch (error) {
        return error.message;
    }
}

import './auth.js';
