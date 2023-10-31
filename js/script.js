// Variables
let total = '0';
let operatorVar = '';
let firstNumberVar = 0;
let secondNumberVar = 0;

// Calculations
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
    return parseFloat((parseInt(firstNumber) / parseInt(secondNumber)).toFixed(6));
}

// Operate Function
const operate = (firstNumber, secondNumber, operator) => {
    if (operator === '-') {
        total = subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        total = multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        total = divide(firstNumber, secondNumber);
    } else total = add(firstNumber, secondNumber);
    display.textContent = total;
};

// Display system
const display = document.querySelector('#display-result');
display.textContent = total;
let displayText = parseInt(display.textContent);

const checkIfZero = () => (display.textContent == 0) ? true : false;

// Keypad
const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clear);
function clear() {
    total = '0';
    display.textContent = total;
};

const plusMinusButton = document.querySelector('#plus-minus');
plusMinusButton.addEventListener('click', () => operate(displayText, -1, '*'));

const percentButton = document.querySelector('#percent');
percentButton.addEventListener('click', () => alert('work in progress'));

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {firstNumberVar = total;
                                            operatorVar = '/';
                                            total = '0';
                                            display.textContent = '0';
                                        });

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => operate(firstNumberVar, total, operatorVar));

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {checkIfZero() ? total = '1' : total += '1';
                                        display.textContent = total;
                                    });