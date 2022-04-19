const display = document.querySelector('input');
let firstNumber = '';
let secondNumber = '';
let operationSelected = '';
let memoryNumber = '';

document.querySelectorAll('.number').forEach(numberButton => numberButton.addEventListener('click', setNumbers));
document.querySelectorAll('.operation').forEach(operationButton => operationButton.addEventListener('click', setOperation));
document.querySelectorAll('.memory').forEach(memoryButton => memoryButton.addEventListener('click', memoryCall));
document.querySelector('.decimal').addEventListener('click', decimalCheck);
document.querySelector('.equal').addEventListener('click', () => {
    if (isSet(firstNumber) && isSet(operationSelected) && isSet(secondNumber)){
        const result = calculate();
        firstNumber = result;
        secondNumber = '';
        operationSelected = '';
        display.value = firstNumber;

    }
});

function setNumbers(e) {
    const numberSelection = e.target.value;
    if (operationSelected) {
        secondNumber += numberSelection;
        display.value = secondNumber;
    } else {
        firstNumber += numberSelection;
        display.value = firstNumber;
    }
};

function setOperation(e) {
    if (isSet(firstNumber) && !isSet(secondNumber)) {
        operationSelected = e.target.textContent;
        return;
    } 
        
    if (isSet(firstNumber) && isSet(operationSelected) && isSet(secondNumber)) {
        const result = calculate();
        firstNumber = result;
        secondNumber = '';
        operationSelected = e.target.textContent;
        display.value = firstNumber;
    }
}

function decimalCheck() {
    if (!isSet(operationSelected) && !haveDecimal(firstNumber)) {
        firstNumber += '.';
        display.value = firstNumber;
    } 
    
    if (isSet(operationSelected) && !haveDecimal(secondNumber)) {
        secondNumber += '.';
        display.value = secondNumber;
    }
}

function memoryCall(e) {
    memoryButton = e.target.value;
    switch (memoryButton) {
        case 'M+':
            if (display.value) {
                memoryNumber = add(memoryNumber, display.value);
            }
            break;
        case 'M-':
            if (display.value) {
                memoryNumber = subtract(memoryNumber, display.value);
            }
        case 'MR':
            if (!isSet(operationSelected)) {
                display.value = memoryNumber;
                firstNumber = memoryNumber;
            }
            else if (!isSet(secondNumber)) {
                secondNumber = memoryNumber;
                display.value = memoryNumber;
            }
            break;
    }
}

function calculate() {
    switch (operationSelected) {
    case 'X':
        return multiply(firstNumber, secondNumber);
    case '/':
        return divide(firstNumber, secondNumber); 
    case '+':
        return add(firstNumber, secondNumber);
    case '-':
        return subtract(firstNumber, secondNumber);
}
}

function add(numberOne, numberTwo){
    return `${Number(numberOne) + Number(numberTwo)}`;
}

function subtract(numberOne, numberTwo){
    return `${Number(numberOne) - Number(numberTwo)}`;
}

function multiply(numberOne, numberTwo){
    return `${Number(numberOne) * Number(numberTwo)}`;
}

function divide(numberOne, numberTwo){
    return `${Number(numberOne) / Number(numberTwo)}`;
}

document.querySelector('.clear').addEventListener('click', () => {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operationSelected = '';
});

function isSet(mathSymbol) {
    return mathSymbol !== "";
}

function haveDecimal(string) {
    return string.indexOf('.') >= 0;
}