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
var previousOperation = "";
var previousNumber = 0;
const maxDigits = 15;
var waitingForDecimal = false;

// Adding event listener to the body of the page so when the user inputs 
// a key with anything selected on the page, the key gets registered.
document.body.addEventListener("keydown", (event) => {
    pressKey(event);
});

function pressKey(event){
    let key;
    // If called by numerical button, 
    if (typeof event == "string"){
        Key = event;
    }
    else {
        Key = event.key;
    }
    // Key that the user presses
    // If the key is a number and the calculator input has not reached max digits
    if (checkIfNumber(Key) && inputNumber.toString().length < maxDigits){
        // Add key to end of number and convert format to using commas
        if (waitingForDecimal){
            inputNumber = Number(inputNumber.toString() + "."+Key);
            waitingForDecimal = false;
        }
        else {
            inputNumber = Number(inputNumber.toString() + Key);
        }
        numberInput.innerHTML = inputNumber.toLocaleString("en-US");
    }
    else if (checkIfNumber(Key) && inputNumber.toString().indexOf("e") != -1){
        clearClick();
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
                event.preventDefault();
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
}

function equalsClick(){
    // Change output text to use multiply and divide symbols
    if (previousOperation == "*" || previousOperation == "/"){
        if (previousOperation == "*") previousInput.innerHTML = previousNumber + " &times; " + inputNumber + " =";
        else if (previousOperation = "/") previousInput.innerHTML = previousNumber + " &divide; " + inputNumber + " =";
    }
    else if (previousOperation == ""){
        return;
    }
    else {
        previousInput.innerHTML = previousNumber + " " + previousOperation + " " + inputNumber + " =";
    }
    console.log(previousNumber + ", " + previousOperation + ", "+ inputNumber);
    inputNumber = eval(previousNumber + previousOperation + inputNumber);
    numberInput.innerHTML = inputNumber;
}

function operationClick(operation){
    previousNumber = inputNumber;
    previousOperation = "+";
    previousInput.innerHTML = previousNumber + " " + previousOperation;
    inputNumber = 0;
}

function addClick(){
    previousNumber = inputNumber;
    previousOperation = "+";
    previousInput.innerHTML = previousNumber + " " + previousOperation;
    inputNumber = 0;
}

function minusClick(){
    previousNumber = inputNumber;
    previousOperation = "-";
    previousInput.innerHTML = previousNumber + " " + previousOperation;
    inputNumber = 0;
}

function multiplyClick(){
    previousNumber = inputNumber;
    previousOperation = "*";
    previousInput.innerHTML = previousNumber + " &times;";
    inputNumber = 0;
}

function divideClick(){
    previousNumber = inputNumber;
    previousOperation = "/";
    previousInput.innerHTML = previousNumber + " &divide;";
    inputNumber = 0;
}

function clearClick(){
    previousNumber = 0;
    previousInput.innerHTML = "";
    inputNumber = 0;
    numberInput.innerHTML = 0;
    previousOperation = "";
}

function backspaceClick(){
    console.log(inputNumber.toString() + " | " + numberInput.innerHTML);
    let len = numberInput.innerHTML.toString().length;
    numberInput.innerHTML = numberInput.innerHTML.toString().slice(0,len-1);
    if (numberInput.innerHTML[-1] == "."){
        let len = numberInput.innerHTML.toString().length;
        numberInput.innerHTML = numberInput.innerHTML.toString().slice(0,len-1);
    }
    // If number is empty, change to 0
    if (isNaN(newFloat)){
        newFloat = 0;
    }
    inputNumber = newFloat;
    numberInput.innerHTML = inputNumber.toLocaleString("en-US");




}

function decimalClick(){
    waitingForDecimal = true;
    numberInput.innerHTML += ".";
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