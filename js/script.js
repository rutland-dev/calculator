// Variables
let total = 0;
let operatorVar = '';
let operatorVarSaved = '';
let firstNumberVar = 0;
let secondNumberActive = false;
let addToNumber = false;

// Calculations
const add = (firstNumber, secondNumber) => {
    addToNumber = false;
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}

const subtract = (firstNumber, secondNumber) => {
    addToNumber = false;
    return parseFloat(firstNumber) - parseFloat(secondNumber);
}

const multiply = (firstNumber, secondNumber) => {
    addToNumber = false;
    return parseFloat(firstNumber) * parseFloat(secondNumber);
}

const divide = (firstNumber, secondNumber) => {
    addToNumber = false;
    if (secondNumber == 0) {
        total = 'Stupid';
        return 'Stupid';
    } else {
        return parseFloat((parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(6));
    }
}

// Operate Function
const operate = (firstNumber, secondNumber, operator) => {
    if (secondNumberActive === false) {
        total = multiply(firstNumberVar, 1);
    } else if (operator === '-') {
        total = subtract(firstNumber, secondNumber);
        firstNumberVar = total;
    } else if (operator === '*') {
        total = multiply(firstNumber, secondNumber);
        firstNumberVar = total;
    } else if (operator === '/') {
        total = divide(firstNumber, secondNumber);
        firstNumberVar = total;
    } else {
        total = add(firstNumber, secondNumber);
        firstNumberVar = total;
    }
    firstNumberVar = total;
    display.textContent = total;
    secondNumberActive = false;
};

// Display system
const display = document.querySelector('#display-result');
display.textContent = total.toString();
let displayText = parseFloat(display.textContent);

// Keypad
const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", clear);
function clear() {
    total = 0;
    display.textContent = total;
    addToNumber = false;
};

// Operator Keys
const plusMinusButton = document.querySelector('#plus-minus');
plusMinusButton.addEventListener('click', () => operate(displayText, -1, '*'));

const percentButton = document.querySelector('#percent');
percentButton.addEventListener('click', () => total = total / 100);

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    secondNumberActive = true;
    firstNumberVar = parseFloat(total);
    operatorVar = '/'; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    secondNumberActive = true;
    operatorVar = '*';
    firstNumberVar = total;
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    secondNumberActive = true;
    operatorVar = '-';
    firstNumberVar = total;
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    secondNumberActive = true;
    operatorVar = '+';
    firstNumberVar = total; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    operate(firstNumberVar, total, operatorVar);
});

// Number Keys

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        addToNumber ? total += `${numberButton.id}` : total = `${numberButton.id}`; 
        display.textContent = total;
        if (secondNumberActive === false) {
            firstNumberVar = total;
        }
        addToNumber = true;
    });
});

// Number logic
// if total does not have a decimal and is 0
    // if there is an operator sign in the variable
        // replace total with number
// else add number to total

// Operator logic
// replace total with new total
// add operator sign to variable
// after operator functions remove operator variable