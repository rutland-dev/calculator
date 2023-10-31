// Variables
let total = 0;
let operatorVar = '';
let firstNumberVar = 0;
let secondNumberVar = 0;
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
    return parseFloat((parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(6));
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
    display.textContent = parseFloat(total);
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
percentButton.addEventListener('click', () => alert('work in progress'));

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    firstNumberVar = parseFloat(total); 
    operatorVar = '/'; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    firstNumberVar = total; 
    operatorVar = '*'; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener('click', () => {
    firstNumberVar = total; 
    operatorVar = '-'; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    firstNumberVar = total; 
    operatorVar = '+'; 
    total = 0; 
    display.textContent = '0';
    addToNumber = false;
});

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    operate(firstNumberVar, total, operatorVar);
    addToNumber = false;
});

// Number Keys


const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    addToNumber ? total += '1' : total = '1'; 
    display.textContent = total;
    addToNumber = true;
});

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    addToNumber ? total += '2' : total = '2'; 
    display.textContent = total;
    addToNumber = true;
});

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    addToNumber ? total += '3' : total = '3'; 
    display.textContent = total;
    addToNumber = true;
});

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    addToNumber ? total += '4' : total = '4'; 
    display.textContent = total;
    addToNumber = true;
});

const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    addToNumber ? total += '5' : total = '5'; 
    display.textContent = total;
    addToNumber = true;
});

const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    addToNumber ? total += '6' : total = '6'; 
    display.textContent = total;
    addToNumber = true;
});

const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    addToNumber ? total += '7' : total = '7'; 
    display.textContent = total;
    addToNumber = true;
});

const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    addToNumber ? total += '8' : total = '8'; 
    display.textContent = total;
    addToNumber = true;
});

const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    addToNumber ? total += '9' : total = '9'; 
    display.textContent = total;
    addToNumber = true;
});

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    addToNumber ? total += 0 : total = '0'; 
    display.textContent = total;
    if (total != 0) {
        addToNumber = true;
    }
});

const pointButton = document.querySelector('#point');
pointButton.addEventListener('click', () => {
    total += '.';
    display.textContent = total;
    addToNumber = true;
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