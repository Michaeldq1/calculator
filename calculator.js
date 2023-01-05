"use strict";

const display = document.getElementById('calculator-display');
const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const returnKey = document.getElementById('return-key');
const clearKey = document.getElementById('clear-key');
const deleteKey = document.getElementById('delete-key');
let isOutputDisplayed = false;

for (const number of numberKeys) {
    number.addEventListener('click', (event) => {
        let inputString = display.innerHTML;
        let lastChar = inputString[inputString.length - 1];

        if (isOutputDisplayed === false) {
            display.innerHTML += event.target.innerHTML;
        } else if (
            isOutputDisplayed === true && lastChar === '-' || 
            lastChar === '+' || 
            lastChar === '÷' || 
            lastChar === '×') {

            isOutputDisplayed = false;
            display.innerHTML += event.target.innerHTML;

        } else {
            isOutputDisplayed = false;
            display.innerHTML = '';
            display.innerHTML += event.target.innerHTML;
        }
    });
}

for (const operator of operatorKeys) {
    operator.addEventListener('click', (event) => {
        let inputString = display.innerHTML;
        let lastChar = inputString[inputString.length - 1];

        if (lastChar === '+' || lastChar === '-' || 
            lastChar === '×' || lastChar === '÷') {

            display.innerHTML = 
            inputString.substring(0, inputString.length - 1) + 
            event.target.innerHTML;

        } else if (inputString.length == 0) {
            console.log('Enter a number first!')
        } else {
            display.innerHTML += event.target.innerHTML;
        }
    });
}

returnKey.addEventListener('click', () => {
    let inputString = display.innerHTML;
    let numberString = inputString.split(/\+|\-|\×|\÷/g);
    let operatorString = inputString.replace(/[0-9]|\./g, '').split('');

    let multiply = operatorString.indexOf('×');
    while (multiply != -1) {
        numberString.splice(multiply, 2, 
            numberString[multiply] * numberString[multiply + 1]);
        operatorString.splice(multiply, 1);
        multiply = operatorString.indexOf('×');
    }

    let divide = operatorString.indexOf('÷');
    while (divide != - 1) {
        numberString.splice(divide, 2, 
            numberString[divide] / numberString[divide + 1]);
        operatorString.splice(divide, 1);
        divide = operatorString.indexOf('÷');
    }

    let subtract = operatorString.indexOf('-');
    while (subtract != -1) {
        numberString.splice(subtract, 2,
            numberString[subtract] - numberString[subtract + 1]);
        operatorString.splice(subtract, 1);
        subtract = operatorString.indexOf('-');
    }

    let add = operatorString.indexOf('+');
    while (add != -1) {
        numberString.splice(add, 2, 
            parseFloat(numberString[add]) + parseFloat(numberString[add + 1]));
        operatorString.splice(add, 1);
        add = operatorString.indexOf('+');
    }

    // function runOperation(operator) {
    //     let operatorIndex = operatorString.indexOf(operator);
    //     let operatorExecution;

    //     switch (operator) {
    //         case '×':
    //             operatorExecution = 
    //                 numberString[operatorIndex] * 
    //                 numberString[operatorIndex + 1];
    //             break;
    //         case '÷':
    //             operatorExecution = 
    //                 numberString[operatorIndex] /
    //                 numberString[operatorIndex + 1];
    //             break;
    //         case '+':
    //             operatorExecution = 
    //                 parseFloat(numberString[operatorIndex]) + 
    //                 parseFloat(numberString[operatorIndex + 1]);
    //             break;
    //         case '-':
    //             operatorExecution = 
    //                 numberString[operatorIndex] - 
    //                 numberString[operatorIndex + 1];
    //             break;
    //     }

    //     while (operatorIndex != -1) {
    //         numberString.splice(operatorIndex, 2, operatorExecution);
    //         operatorString.splice(operatorIndex, 1);
    //         operatorIndex = operatorString.indexOf(operator);
    //     }
    // }

    // runOperation('×');
    // runOperation('÷');
    // runOperation('+');
    // runOperation('-');

    display.innerHTML = numberString[0];

    isOutputDisplayed = true;

});

deleteKey.addEventListener('click', () => {
    let inputString = display.innerHTML;
    let inputArray = inputString.split('');

    if (isOutputDisplayed === true) {
        display.innerHTML = '';
    } else {
        inputArray.pop();
        inputString = inputArray.join('');
        display.innerHTML = inputString;
    }
});

clearKey.addEventListener('click', () => {
    display.innerHTML = '';
});
