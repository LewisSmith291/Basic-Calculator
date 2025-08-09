const numberInput = document.getElementById("num-input");

document.body.addEventListener("keydown", (event) => {
    console.log(event.key);
    numberInput.value += event.key;
    console.log(numberInput.value);
});
