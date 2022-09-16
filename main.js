let num1 = null;
let num2 = null;
let operator = null;
const display = document.querySelector('.display');
let displayStep = document.querySelector('.display-step');
const clearButton = document.querySelector('.key-clear');
display.innerHTML = '0';

function operate(num1, operator, num2){
    if(operator === '+'){
        return num1 + num2;
    }else if(operator === '-'){
        return num1 - num2;
    }else if(operator === '/'){
        return num1 / num2;
    }else if(operator === '*'){
        return num1 * num2;
    }else if(operator === '%'){
        return num1 % num2;
    }
}

// These are the buttons for all the number and operator
const numberButtons = document.querySelectorAll('.key')
numberButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        btnValue = e.target.innerHTML;
        displayStep.innerHTML += "  " + btnValue;
        // If user doesn't press equall button but press operator instead
        if(num1 !== null && operator !== null && num2 !== null && onlyOperator(btnValue)){
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            display.innerHTML = operate(num1, operator, num2);
            num1 = operate(num1, operator, num2);
            operator = btnValue;
            num2 = null;
        }else if(btnValue === '+' || btnValue === '-' || btnValue === '*' || btnValue === '/' || btnValue === '%'){
            operator = btnValue;
        }else if(num2 === null && operator === null){
            num1 += btnValue;
            num1 = num1.replace(/null/g, '');
        }else if(num1 !== null && operator !== null){
            num2 += btnValue;
            num2 = num2.replace(/null/g, '');
        }
    })
})

// This is the button for equal key
const equalButton = document.querySelector('.key-equal');
equalButton.addEventListener('click', ()=>{
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    display.innerHTML = operate(num1, operator, num2);
})

// This is the button for clear key
clearButton.addEventListener('click', () =>{
    display.innerHTML = '0';
    displayStep.innerHTML = null;
    num1 = null;
    num2 = null;
    operator = null;
})

















// Check if string contain number return true (Function)
function onlyNumbers(str) {
    return /^[0-9]+$/.test(str);
}

// Check if string contain operator return true (Function)
function onlyOperator(str){
    return /[+*/%-]/.test(str)
}

// Check if variable is defined return true (Function)
function checkIfDefined(variable){
    if(typeof variable !== 'undefined'){
        return true;
    }else if(typeof variable === 'undefined'){
        return false;
    }
}


