const numberButtons = document.querySelectorAll('button.number');
const operationButtons = document.querySelectorAll('button.operation');
const memoryButtons = document.querySelectorAll('memory');
const clearButton = document.querySelector('.clear');
const equalSign = document.querySelector('.equal');
const decimalNumber = document.querySelector('.decimal');


let firstNumber = '';
let secondNumber = '';
let operationSelected = '';
let dotCount = 0;

numberButtons.forEach(numberButton => numberButton.addEventListener('click', typeNumbers));
operationButtons.forEach(operationButtons => operationButtons.addEventListener('click', operationAssigned));
equalSign.addEventListener('click', operationAction);
decimalNumber.addEventListener('click', decimalCheck);

clearButton.addEventListener('click', () => {
    document.querySelector('input').value = '';
    firstNumber = '';
    secondNumber = '';
    operationSelected ='';
    dotCount = 0;
        });

function decimalCheck(){
    if(firstNumber !== '' && secondNumber == '' && dotCount == 0){
            firstNumber += decimalNumber.value;
            document.querySelector('input').value = firstNumber;
            dotCount ++;
            } else if(operationSelected !== ''){
                    if (1 >= dotCount || secondNumber.indexOf(".") == -1){
                    secondNumber += decimalNumber.value;
                    document.querySelector('input').value = secondNumber;
                    dotCount ++;
                        } 
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
            dotCount ++;
            } else if(firstNumber !=='' && secondNumber !==''){
                    operationAction(operationSelected);
                    operationSelected = e.target.textContent;
                    dotCount ++;
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
            break;
        case '/':
            let division = firstNumber / secondNumber;
            document.querySelector('input').value = division;
            firstNumber = division;
            secondNumber = '';
            break;
        case '+':
            let addition = parseFloat(firstNumber) + parseFloat(secondNumber);
            document.querySelector('input').value = addition;
            firstNumber = addition;
            secondNumber = '';
            break;
        case '-':
            let subtraction = firstNumber - secondNumber;
            document.querySelector('input').value = subtraction;
            firstNumber = subtraction;
            secondNumber = '';
            break;
    }   
}

//   console.log('Result:' + subtraction);
//   console.log('First Number:' + firstNumber);
//   console.log('Second Number:' + secondNumber);
  