let userInput: unknown;
let username: string;

userInput = 5;
userInput = "Salman";

if (typeof userInput === 'string') {
    username = userInput;
}

function generateError (message: string, code: number): never {
    throw {
        message, errorCode: code
    };
}

const result = generateError("An error occurred", 500);
console.log(result);