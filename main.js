
function Calc (operation, a, b) {

    let operations = {
        '+': (a + b),
        '-': (a - b),
        'x': (a * b),
        '÷': (a / b),
    }
    let isNotValid = typeof a != 'number' || typeof b != 'number' || b === 0;

    if (isNotValid) {
        return 'Error';
    } else if (operation in operations) {
        return operations[operation];
    } else {
        console.log ('unknown operation')
}
}
    
let a = '';
let b = '';
let operation = '';
const clearButton = document.querySelector('.button_C'); 
const screen = document.querySelector('.calc_screen');
const eraser = document.querySelector('.eraser'); 
const equal = document.querySelector('.equal'); 
const numbers = document.querySelectorAll('.number');
const actions = document.querySelectorAll('.action');



for (let action of actions) {
    action.addEventListener('click', function () {
        screen.textContent += action.textContent;
        operation = this.textContent
        console.log(operation)
    });
}

for (let number of numbers) {
    number.addEventListener('click', function () {

    if(screen.textContent === '0'){
        screen.textContent = number.textContent;
    } else {
        screen.textContent += number.textContent;
    }

    if (operation === '') {
        a += this.textContent  
    } else {
        b += this.textContent
    }  

    console.log(a);
    console.log(b);
});
}

clearButton.addEventListener('click', function() {
        a = '';
        b = '';
        operation = '';
        screen.textContent = '0';
})

equal.onclick = function () {
    screen.textContent = Calc(operation, +a, +b);
    a = screen.textContent;
    b = '';
    operation = '';
  };


eraser.addEventListener('click', function () { 
    let resultLength = screen.textContent.length;
    if(resultLength > 1) {
    screen.textContent = screen.textContent.slice(0, resultLength - 1)
    } else {
        screen.textContent = '0'
    }
});






