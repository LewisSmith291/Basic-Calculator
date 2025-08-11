const previousInput = document.getElementById("previous-input")
const numberInput = document.getElementById("num-input");

const equalsButton = document.getElementById("equals");
const addButton = document.getElementById("add");
const minusButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const decimalButton = document.getElementById("decimal");

const OperationArray = ["-", "+", "/", "*", "="];


equalsButton.addEventListener("click", equalsClick);
minusButton.addEventListener("click", minusClick);

document.body.addEventListener("keydown", (event) => {
    let Key = event.key;
    // If number input
    if (checkIfNumber(Key) && numberInput.innerHTML.length < 16){
        numberInput.innerHTML += Key;
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
    }
});

function equalsClick(){
    previousInput.innerHTML = numberInput.innerHTML;
}

function minusClick(){
    
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