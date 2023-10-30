const add = (firstNumber, secondNumber) => {
    return parseInt(firstNumber) + parseInt(secondNumber);
}

const subtract = (firstNumber, secondNumber) => {
    return parseInt(firstNumber) - parseInt(secondNumber);
}

const multiply = (firstNumber, secondNumber) => {
    return parseInt(firstNumber) * parseInt(secondNumber);
}

const divide = (firstNumber, secondNumber) => {
    return parseInt(firstNumber) / parseInt(secondNumber);
}

const operate = (firstNumber, secondNumber, operator) => {
    if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstnumber, secondNumber);
    } else return add(firstNumber, secondNumber);
};