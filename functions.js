'use strict';
const operations = {
    '×': (num1, num2) => num1 * num2,
    '÷': (num1, num2) => num1 / num2,
    '+': (num1, num2) => parseFloat(num1) + parseFloat(num2),
    '-': (num1, num2) => num1 - num2,
  };

const display = document.getElementById('calculator-display');
const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const returnKey = document.getElementById('return-key');
const clearKey = document.getElementById('clear-key');
const deleteKey = document.getElementById('delete-key');
let isOutputDisplayed = false;

function insertNumber(event) {
    let inputString = display.textContent;
    let lastChar = inputString[inputString.length - 1];

    if (isOutputDisplayed === false) {
        display.textContent += event.target.textContent;
    } else if (
        isOutputDisplayed === true && lastChar === '-' || 
        lastChar === '+' || 
        lastChar === '÷' || 
        lastChar === '×') {

        isOutputDisplayed = false;
        display.textContent += event.target.textContent;
    } else {
        isOutputDisplayed = false;
        display.textContent = '';
        display.textContent += event.target.textContent;
    }
}

function insertOperator(event) {
    let inputString = display.textContent;
    let lastChar = inputString[inputString.length - 1];

    if (lastChar === '+' || lastChar === '-' || 
        lastChar === '×' || lastChar === '÷') {

        display.textContent = 
        inputString.substring(0, inputString.length - 1) + 
        event.target.textContent;

    } else if (inputString.length == 0) {
        console.log('Enter a number first!')
    } else {
        display.textContent += event.target.textContent;
    }
}

function runOperations() {
    let inputString = display.textContent;
    let lastChar = inputString[inputString.length - 1];

    if (lastChar === '+' || lastChar === '-' || 
        lastChar === '×' || lastChar === '÷') {
            inputString = inputString.substring(0, inputString.length - 1);
    }

    let numberString = inputString.split(/\+|\-|\×|\÷/g);
    let operatorString = inputString.replace(/[0-9]|\./g, '').split('');

    function runOperation(operator) {

        const operation = operations[operator];
      
        let operatorIndex = operatorString.indexOf(operator);
        while (operatorIndex !== -1) {
          numberString.splice(operatorIndex, 2,
          operation(numberString[operatorIndex], numberString[operatorIndex + 1]));
          operatorString.splice(operatorIndex, 1);
          operatorIndex = operatorString.indexOf(operator);
        }
      }

    runOperation('÷');
    runOperation('×');
    runOperation('+');
    runOperation('-');

    display.textContent = numberString[0];
    isOutputDisplayed = true;
}

function removeLastCharacter() {
    let inputString = display.textContent;
    let newString = inputString.substring(0, inputString.length - 1);

    if (isOutputDisplayed === true) {
        display.textContent = '';
    } else {
        display.textContent = newString;
    }
}

function clearString() {
    display.textContent = '';
}