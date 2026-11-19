
const screen = document.querySelector('.screen');
const operation = document.querySelector('.operation'); 
const ans_screen = document.querySelector('.ans');
let secondOn = false;
let first = '';
let second ='';
let operator = '';
let ans = 0;

function incrementFirst(num){
    first += num;
    operation.textContent = first;
}

function incrementSecond(num){
    second += num;
    operation.textContent = second;
}

function clearEverything() {
    first = '';
    second = '';
    operator = 'NA'
    ans = '';
    secondOn = false;
    operation.textContent = first || 0;
    operator_doc.textContent = operator;
    ans_screen.textContent = ans;
}
const operator_doc = document.querySelector('.operator');

function updateOperator(op){
    operator = op;
    operator_doc.textContent = operator;
}

function switchToSecond(){
    operation.textContent = second || 0;
    secondOn =true;
}

function calculate(a , b, operator){
    a = Number(a);
    b = Number(b);
    if (operator == '+'){
        return a + b;
    }
    if (operator == '-'){
        return a - b;
    }
    if (operator == '*'){
        return a * b;
    }
    if (operator == '/' && b!= 0){
        return a / b;
    }

}

function logOnScreen(){
    ans = calculate(first, second , operator);
    if (second == 0 && operator == '/'){
        ans_screen.textContent = 'Cannot divide by zero'
    } else {
        ans_screen.textContent = ans;
    }
}

// buttons 
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const clear = document.querySelector('.clear');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');

const equals = document.querySelector('.equals');

// event listener 
one.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(1);
    } else {
        incrementFirst(1)
    }
    }
);
two.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(2);
    } else {
        incrementFirst(2)
    }}
);

three.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(3);
    } else {
        incrementFirst(3);
    }}
);
four.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(4);
    } else {
        incrementFirst(4);
    }}
);
five.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(5);
    } else {
        incrementFirst(5);
    }}
);
six.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(6);
    } else {
        incrementFirst(6)
    }}
);
seven.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(7);
    } else {
        incrementFirst(7)
    }}
);
eight.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(8);
    } else {
        incrementFirst(8)
    }}
);
nine.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(9);
    } else {
        incrementFirst(9)
    }}
);
zero.addEventListener('click', ()=>{
    if (secondOn){
        incrementSecond(0);
    } else {
        incrementFirst(0)
    }}
);

clear.addEventListener('click', ()=>{
    clearEverything();
})

plus.addEventListener('click', ()=>{
    updateOperator('+');
    switchToSecond();
})

minus.addEventListener('click', ()=>{
    updateOperator('-');
    switchToSecond();
})

multiply.addEventListener('click', ()=>{
    updateOperator('x');
    switchToSecond();
})

divide.addEventListener('click', ()=>{
    updateOperator('/');
    switchToSecond();
})

equals.addEventListener('click', ()=>{
    logOnScreen();
})