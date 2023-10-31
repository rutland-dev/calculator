let total = 0;

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
        total = subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        total = multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        total = divide(firstnumber, secondNumber);
    } else total = add(firstNumber, secondNumber);
    display.textContent = total;
};

const display = document.querySelector('#display-result');
display.textContent = total;

const checkIfZero = () => (display.textContent == 0) ? true : false;

const clearKey = document.querySelector('#clear');
clearKey.addEventListener("click", clear);
function clear() {
    total += 1;
    display.textContent = total;
};

const plusMinus = document.querySelector('#plus-minus');
plusMinus.addEventListener('click', () => operate(parseInt(display.textContent), -1, '*'));

