const numberButtons = document.querySelectorAll('button.number');
const operationButtons = document.querySelectorAll('button.operation');
const memoryButtons = document.querySelectorAll('memory');
const clearButton = document.querySelector('.clear');


clearButton.addEventListener('click', () => {document.querySelector('input').value = '';});

numberButtons.addEventListener('click', (e) => {
    const newNumber = e.target.innerHTML;
    console.log(newNumber);
    switch(newNumber){
        case "7":
        console.log('you are here');
        break;     
    }
});
