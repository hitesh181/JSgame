
const buttons = document.querySelectorAll('button');

let currentValue="", previousValue="";

const currentScreen = document.querySelector('.currentScreen');
const previousScreen = document.querySelector('.previousScreen');
const clearScreen = document.querySelector('.row1 .clear');
const equal = document.querySelector('.equals');
const dot = document.querySelector('.dot');
const correct = document.querySelector('.correct');

console.log(correct);

dot.addEventListener('click', () => addDecimal()); 
correct.addEventListener('click', () => correctValues()); 
clearScreen.addEventListener('click', () => cleared()); 


function correctValues(){
    console.log("backspace");
    currentValue = currentValue.slice(0, currentValue.length -1);
    currentScreen.textContent = currentValue;
}
//main calulation wala function yahan se call ho raha h
equal.addEventListener('click', () =>{
    if(currentValue != '' && previousValue != ''){
        equate();
        //avoiding too lengthy outputs
        if(previousValue.length >= 5){
            console.log('too long');
            currentScreen.textContent = previousValue.slice(0,5)+"....";
        }
        else 
            currentScreen.textContent = previousValue;
        previousScreen.textContent = '';
    }
}); 

//add event listener to all the noss
const operands = document.querySelectorAll('.operand');
operands.forEach(operand => {
    operand.addEventListener('click', (e) => {
        let v = e.target;
        console.log(v.textContent);
        handleOperand(v.textContent);
        currentScreen.textContent = currentValue;
    })});

//add event listener to all the operators
const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
    operator.addEventListener('click', (e) =>{
    
            console.log(e.target.textContent);
            handleOperators(e.target.textContent);
            previousScreen.textContent = previousValue +" "+e.target.textContent;
            currentScreen.textContent = currentValue;
        });
});

//to give universal acccess of the last accessed operators
//this will allow us to call the appropriate function

let op;
function handleOperators(e){
    op = e;
    console.log(op);
    previousValue = currentValue;
    currentValue="";
}


function handleOperand(e){
    if(currentValue.length <=5)
    currentValue += e;
}

function cleared(){
    console.log("OK");
    currentValue ="";
    currentScreen.textContent ="";
    previousScreen.textContent= "";
    operator="";
}

function equate(){
    
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    console.log(op);

   switch(op){
        case '+':
            previousValue += currentValue;
            console.log('sum');
            break;
        case '*':
            previousValue *= currentValue;
            console.log('multipl');
            break;
        case '-':
            previousValue -= currentValue;
            console.log('subtract');
            break;
        case '/':
            previousValue /= currentValue;
            console.log('divide');
            break;
    }
    console.log(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';
        currentScreen.textContent = currentValue;
    }
}

