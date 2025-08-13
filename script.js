// Input text
const previousInput = document.getElementById("previous-input")
const numberInput = document.getElementById("num-input");
// Operation assignments
const OperationArray = ["-", "+", "/", "*", "=", "Enter", "c"];
const addButton = document.getElementById("add");
const minusButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
minusButton.addEventListener("click", minusClick);
addButton.addEventListener("click", addClick);
multiplyButton.addEventListener("click",multiplyClick);
divideButton.addEventListener("click", divideClick);
// Other calculator buttons
const equalsButton = document.getElementById("equals");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
equalsButton.addEventListener("click", equalsClick);
clearButton.addEventListener("click", clearClick);
backspaceButton.addEventListener("click", backspaceClick);
decimalButton.addEventListener("click", decimalClick);

var inputNumber = 0;
var previousExpression = 0;
const maxDigits = 15;


document.body.addEventListener("keydown", (event) => {
    // Key that the user presses
    let Key = event.key;
    // If the key is a number and the calculator input has not reached max digits
    if (checkIfNumber(Key) && inputNumber.toString().length < maxDigits){
        // Add key to end of number and convert format to using commas
        inputNumber = Number(inputNumber.toString() + Key);
        numberInput.innerHTML = inputNumber.toLocaleString("en-US");
    }

    // If operation key input
    if (checkIfOperation(Key)){
        switch (Key) {
            // Equals hotkey
            case "Enter":
                equalsButton.click();
                break;
            // Minus hotkey
            case "-":
                minusButton.click();
                break;
            // Minus hotkey
            case "+":
                addButton.click();
                break;
            // Add hotkey
            case "*":
                multiplyButton.click();
                break;
            // Multiply hotkey
            case "/": 
                divideButton.click();
                break;
            // Divide hotkey
            case ".": 
                decimalButton.click();
                break;
            // Clear hotkey
            case "c":
                clearButton.click();
                break;
        }
        return;
    }
    if (Key == "Backspace"){
        backspaceButton.click();
    }
    if (Key == "."){
        decimalButton.click();
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
    // Take off last digit of number
    let newFloat = parseFloat(inputNumber.toString().slice(0,len-1));
    // If number is empty, change to 0
    if (isNaN(newFloat)){
        newFloat = 0;
    }
    inputNumber = newFloat;
    numberInput.innerHTML = inputNumber.toLocaleString("en-US");
}

function decimalClick(){

}

function calculate(oldExpr, newExpr){

}

function trackHistory(previous, current){

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