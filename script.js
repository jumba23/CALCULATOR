const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const memoryButtons = document.querySelectorAll('.memory');
const clearButton = document.querySelector('.clear');
const equalSign = document.querySelector('.equal');
const decimalNumber = document.querySelector('.decimal');

let firstNumber = '';
let secondNumber = '';
let operationSelected = '';
let memoryNumber = '';

numberButtons.forEach(numberButton => numberButton.addEventListener('click', typeNumbers));
operationButtons.forEach(operationButton => operationButton.addEventListener('click', operationAssigned));
memoryButtons.forEach(memoryButton => memoryButton.addEventListener('click', memoryCall));
equalSign.addEventListener('click', operationAction);
decimalNumber.addEventListener('click', decimalCheck);

function typeNumbers(e) {
    let numberSelection = e.target.value;
    if (operationSelected !== '') {
        secondNumber += numberSelection;
        document.querySelector('input').value = '';
        document.querySelector('input').value = secondNumber;
    } else {
        firstNumber += numberSelection;
        document.querySelector('input').value = firstNumber;
    }
};

function operationAssigned(e) {
    if (firstNumber == '' && secondNumber == '') { }
    else if (firstNumber !== '' && secondNumber == '') {
        operationSelected = e.target.textContent;
    } else if (firstNumber !== '' && secondNumber !== '') {
        operationAction(operationSelected);
        operationSelected = e.target.textContent;     
    } else if (firstNumber == '' & secondNumber == '') {
        firstNumber = document.querySelector('input').value;
    }
}

function decimalCheck() {
    if (operationSelected == '' && firstNumber.indexOf('.') == -1) {
        firstNumber += '.';
        document.querySelector('input').value = firstNumber;
    } else if (secondNumber.indexOf('.') == -1 && operationSelected !== '') {
        secondNumber += '.';
        document.querySelector('input').value = secondNumber;
    }
}

function memoryCall(e) {
    memoryButton = e.target.value;
    switch (memoryButton) {
        case 'M+':
            if (firstNumber !== '') {
                memoryNumber = document.querySelector('input').value;
            }
            break;
        case 'M-':
            memoryNumber = '';
            break;
        case 'MR':
            if (memoryNumber == '') { }
            else if (operationSelected == '') {
                document.querySelector('input').value = memoryNumber;
                firstNumber = memoryNumber;
            }
            else if (secondNumber == '') {
                secondNumber = memoryNumber;
                document.querySelector('input').value = memoryNumber;
            }
            break;
    }
}

function operationAction() {
    if (secondNumber != '') {
        switch (operationSelected) {
            case 'X':
                let product = firstNumber * secondNumber;
                document.querySelector('input').value = product;
                irstNumber = product;
                operationSelected = '';
                secondNumber = '';
                break;
            case '/':
                let division = firstNumber / secondNumber;
                document.querySelector('input').value = division;
                firstNumber = division;
                operationSelected = '';
                secondNumber = '';
                break;
            case '+':
                let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
                document.querySelector('input').value = addition;
                firstNumber = addition;
                operationSelected = '';
                secondNumber = '';
                break;
            case '-':
                let subtraction = firstNumber - secondNumber;
                document.querySelector('input').value = subtraction;
                firstNumber = subtraction;
                operationSelected = '';
                secondNumber = '';
                break;
        }
    }
}

clearButton.addEventListener('click', () => {
    document.querySelector('input').value = '';
    firstNumber = '';
    secondNumber = '';
    operationSelected = '';
});