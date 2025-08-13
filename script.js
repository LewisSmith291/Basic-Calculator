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
    // Key that the user presses
    let Key = event.key;
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
});

function equalsClick(){
    updateCurrent("");
    inputNumber = calculate(previousNumber, "equals", inputNumber);
    numberInput.innerHTML = inputNumber;
}

function minusClick(){
    updateCurrent("-");
    calculate(previousNumber, "-", inputNumber);
}

function addClick(){
    updateCurrent("+");
    calculate(previousNumber, "+", inputNumber);
}

function multiplyClick(){
    updateCurrent("&times;");
    calculate(previousNumber, "*", inputNumber);
}

function divideClick(){
    updateCurrent("&divide;");
    calculate(previousNumber, "/", inputNumber);
}

function clearClick(){
    previousNumber = 0;
    previousInput.innerHTML = "";
    inputNumber = 0;
    numberInput.innerHTML = inputNumber;
}

// Takes a parameter which is used as the string to add on the end of current number. 
function updateCurrent(operation){
    numberInput.innerHTML = inputNumber.toLocaleString("en-US");
    previousNumber = inputNumber;
    numberInput.innerHTML += " " + operation;
    previousOperation = operation;
    previousInput.innerHTML = numberInput.innerHTML;
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
    waitingForDecimal = true;
    numberInput.innerHTML += ".";
}

function calculate(oldNum, operation, newNum){
    let output = 0;
    let operationString = " ";
    switch (operation){
        case "add":
            operationString = "+";
            break;
        case "minus":
            operationString = "-";
            break;
        case "multiply":
            operationString = "&multiply;";
            break;
        case "divide":
            operationString = "&divide;";
            break;
    }
    output = eval(oldNum + operation + newNum);

    return output;
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