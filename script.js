const numberButtons = document.querySelectorAll('button.number');
const operationButtons = document.querySelectorAll('button.operation');
const memoryButtons = document.querySelectorAll('memory');
const clearButton = document.querySelector('.clear');
const equalSign = document.querySelector('.equal');


let firstNumber = '';
let secondNumber = '';
let operationSelected = '';


clearButton.addEventListener('click', () => {
        document.querySelector('input').value = '';
        firstNumber = '';
        secondNumber ='';
        operationSelected ='';
            });

numberButtons.forEach(numberButton => numberButton.addEventListener('click', typeNumbers));
operationButtons.forEach(operationButtons => operationButtons.addEventListener('click', operationDecision));
equalSign.addEventListener('click', operationAction);
        
function typeNumbers(e){
        let numberSelection = e.target.value;
        console.log(numberSelection);
        
       if(firstNumber !== ''){
            document.querySelector('input').value = '';
            while (secondNumber == ''){
            document.querySelector('input').value += numberSelection;
            let finalNumber = document.querySelector('input').value;
            console.log(finalNumber);
            }
         }
            else {
                document.querySelector('input').value += numberSelection;
                let finalSecondNumber = document.querySelector('input').value;
                console.log(finalSecondNumber);
            }          
};

function operationDecision(e){
        firstNumber = document.querySelector('input').value;
        console.log('First Number in Operaration Decision:' + firstNumber);
        if (firstNumber == '' && secondNumber ==''){
        } 
            else if (firstNumber!== '' && secondNumber == ''){
            operationSelected = e.target.textContent;
            console.log('Operation Selected in the function:' + operationSelected);
               
            }
                else if (firstNumber !== '' && secondNumber !== ''){
                secondNumber = document.querySelector('input').value;
                console.log('Second Number:' + secondNumber);
                }

        }

function operationAction(){
    secondNumber = document.querySelector('input').value;
    console.log('Second Number:' + secondNumber);
    console.log('First Number:' + firstNumber);
    console.log('Operation Selected in Operation ACTION :' + operationSelected);
    switch (operationSelected){
        case 'X':
            let product = firstNumber * secondNumber;
            console.log(product);
            document.querySelector('input').value = product;
            break;
        case '/':
            let division = firstNumber / secondNumber;
            console.log(division);
            document.querySelector('input').value = division;
            break;
        case '+':
            let addition = parseInt(firstNumber) + parseInt(secondNumber);
            console.log(addition);
            document.querySelector('input').value = addition;
            break;
        case '-':
            let subtraction = firstNumber - secondNumber;
            console.log(subtraction);
            document.querySelector('input').value = subtraction;
            break;
    }   
}
// function multiplication(firstNumber,secondNumber){
//     return firstNumber * secondNumber;
// };

// function division(firstNumber,secondNumber){
//     return firstNumber / secondNumber;
// };

// function addition(firstNumber,secondNumber){
//     return firstNumber + secondNumber;
// };

// function subtraction(firstNumber,secondNumber){
//     return firstNumber - secondNumber;
// };

// ITERATING THROUGH HTML COLLECTION WITH EVENT LISTENER
// for (numberButton of numberButtons) {
//     numberButton.addEventListener('click', (e) => {
//                 const newVar = e.target.value;
//                 console.log(newVar);
//             })
// }



// HOW TO CALL AN ANNONIMOUS FUNCTION IN ANOTHER FUNCTION?
// numberButtons.forEach(numberButton => {
//     numberButton.addEventListener('click', () => {
//             let currentNumberDisplay = numberButton.textContent;
//             console.log(currentNumberDisplay);
//             document.querySelector('input').value += currentNumberDisplay;
//             let finalNumber = document.querySelector('input').value;
//             console.log(finalNumber);
//             return finalNumber;
//     });
// });