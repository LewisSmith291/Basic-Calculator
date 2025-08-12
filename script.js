const previousInput = document.getElementById("previous-input")
const numberInput = document.getElementById("num-input");

const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");

const addButton = document.getElementById("add");
const minusButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const OperationArray = ["-", "+", "/", "*", "=", "Enter"];

equalsButton.addEventListener("click", equalsClick);
minusButton.addEventListener("click", minusClick);
addButton.addEventListener("click", addClick);
multiplyButton.addEventListener("click",multiplyClick);
divideButton.addEventListener("click", divideClick);
clearButton.addEventListener("click", clearClick);
backspaceButton.addEventListener("click", backspaceClick);

var inputNumber = 0;
var previousExpression = 0;



document.body.addEventListener("keydown", (event) => {
    let Key = event.key;
    /*
    // If number input
    if (checkIfNumber(Key) && lengthExcludingComma(numberInput.innerHTML) < 15){
        if (lengthExcludingComma(numberInput.innerHTML) % 3 == 0 && numberInput.innerHTML.length != 0){
            numberInput.innerHTML += ",";
        }
        numberInput.innerHTML += Key;
        return;
    }
    */
    if (checkIfNumber(Key) && inputNumber.toString().length < 15){
        inputNumber = Number(inputNumber.toString() + Key);
        numberInput.innerHTML = inputNumber.toLocaleString("en-US");
    }

    // If operation key input
    if (checkIfOperation(Key)){
        switch (Key) {

            case "Enter":
                equalsButton.click();
                break;

            case "-":
                minusButton.click();
                break;

            case "+":
                addButton.click();
                break;

            case "*":
                multiplyButton.click();
                break;
            
            case "/": 
                divideButton.click();
                break;

            case ".": 
                decimalButton.click();
                break;
        }
        return;
    }
    if (Key == "Backspace"){
        backspaceButton.click();
    }
});

function equalsClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function minusClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function addClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function multiplyClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function divideClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function clearClick(){
    previousInput.innerHTML = "";
    inputNumber = 0;
    numberInput.innerHTML = inputNumber;
}

function backspaceClick(){
    let len = inputNumber.toString().length
    
    /*

    let len = numberInput.innerHTML.length;
    if (numberInput.innerHTML[len-2] == ","){
        numberInput.innerHTML = numberInput.innerHTML.slice(0, len-1);
        len = numberInput.innerHTML.length;
    }
    numberInput.innerHTML = numberInput.innerHTML.slice(0, len-1);

    if (numberInput.innerHTML == ""){
        numberInput.innerHTML = "0";
    }

    */
}

function calculate(oldExpr, newExpr){

}

function trackHistory(previous, current){

}

function lengthExcludingComma(input){
    let splitArray = input.split(",");
    let newString = "";
    for (let i = 0; i < splitArray.length; i++){
        newString += splitArray[i];
    }
    return newString.length;
}

function checkIfOperation(input){
    if (OperationArray.indexOf(input) == -1) {
        return false;
    }
    return true;
}

function checkIfNumber(input){

    if (isNaN(parseInt(input))){
        return false;
    }
    return true;
}