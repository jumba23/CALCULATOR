const numberButtons = document.querySelectorAll('button.number');
const operationButtons = document.querySelectorAll('button.operation');
const memoryButtons = document.querySelectorAll('memory');
const clearButton = document.querySelector('.clear');
const equalSign = document.querySelector('.equal');
const decimalNumber = document.querySelector('.decimal');


let firstNumber = '';
let secondNumber = '';
let operationSelected = '';


numberButtons.forEach(numberButton => numberButton.addEventListener('click', typeNumbers));
operationButtons.forEach(operationButtons => operationButtons.addEventListener('click', operationAssigned));
equalSign.addEventListener('click', operationAction);
decimalNumber.addEventListener('click', decimalCheck);

clearButton.addEventListener('click', () => {
    document.querySelector('input').value = '';
    firstNumber = '';
    secondNumber = '';
    operationSelected ='';
        });

function decimalCheck(){
     if(firstNumber.indexOf('.') == -1 && operationSelected == ''){
            firstNumber += '.';
            document.querySelector('input').value = firstNumber;
            } else if(secondNumber.indexOf('.') == -1  && operationSelected !== ''){
                    secondNumber += '.';
                    document.querySelector('input').value = secondNumber;
           }   
}
        
function typeNumbers(e){
        let numberSelection = e.target.value;
        if(operationSelected !== ''){
            secondNumber += numberSelection;
            document.querySelector('input').value = '';
            document.querySelector('input').value = secondNumber;
            console.log('Second Number:' + secondNumber);
            }else {
                firstNumber += numberSelection;
                document.querySelector('input').value = firstNumber;
                console.log('First Number:' + firstNumber);
                }          
};

function operationAssigned(e){
        if (firstNumber == '' && secondNumber ==''){} 
            else if (firstNumber !== '' && secondNumber == '' ){
            operationSelected = e.target.textContent;
            console.log('operation seclected: ' + operationSelected);
            } else if(firstNumber !=='' && secondNumber !==''){
                    operationAction(operationSelected);
                    operationSelected = e.target.textContent;
                    console.log('operation seclected: ' + operationSelected);
                    }
        }

function operationAction(){
    switch (operationSelected){
        case 'X':
            let product = firstNumber * secondNumber;
            document.querySelector('input').value = product;
            firstNumber = product;
            secondNumber = '';
            console.log('Result:' + product);
            console.log('First Number:' + firstNumber);
            console.log('Second Number:' + secondNumber);
            break;
        case '/':
            let division = firstNumber / secondNumber;
            document.querySelector('input').value = division;
            firstNumber = division;
            secondNumber = '';
            console.log('Result:' + division);
            console.log('First Number:' + firstNumber);
            console.log('Second Number:' + secondNumber);
            break;
        case '+':
            let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
            document.querySelector('input').value = addition;
            firstNumber = addition;
            secondNumber = '';
            console.log('Result:' + addition);
            console.log('First Number:' + firstNumber);
            console.log('Second Number:' + secondNumber);
            break;
        case '-':
            let subtraction = firstNumber - secondNumber;
            document.querySelector('input').value = subtraction;
            firstNumber = subtraction;
            secondNumber = '';
            console.log('Result:' + subtraction);
            console.log('First Number:' + firstNumber);
            console.log('Second Number:' + secondNumber);
            break;
    }   
}

//   console.log('Result:' + subtraction);
//   console.log('First Number:' + firstNumber);
//   console.log('Second Number:' + secondNumber);
  