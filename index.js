"use strict";

//when a number key is clicked, append number to input string.
for (const number of numberKeys) {
    number.addEventListener('click', insertNumber);
}

//when an operator key is clicked, append opartor to input string.
for (const operator of operatorKeys) {
    operator.addEventListener('click', insertOperator);
}

//when the return key is clicked, run math operations against the input string.
returnKey.addEventListener('click', runOperations);

//when the delete key is clicked, remove last character from input string.
deleteKey.addEventListener('click', removeLastCharacter);

//when the clear key is clicked, clear the input string.
clearKey.addEventListener('click', clearString);