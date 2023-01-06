"use strict";


const display = document.getElementById('calculator-display');
const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const returnKey = document.getElementById('return-key');
const clearKey = document.getElementById('clear-key');
const deleteKey = document.getElementById('delete-key');
let isOutputDisplayed = false;

for (const number of numberKeys) {
    number.addEventListener('click', insertNumber);
}

for (const operator of operatorKeys) {
    operator.addEventListener('click', insertOperator);
}

returnKey.addEventListener('click', runOperations);

deleteKey.addEventListener('click', removeLastCharacter);

clearKey.addEventListener('click', clearString);