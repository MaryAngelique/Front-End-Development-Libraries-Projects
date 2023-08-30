let trailingResult = 0;
let operationOptions = ["divide", "multiply", "subtract", "add"];
let workingOperation = "";

function clearDisplay() {
    let display = document.getElementById("display");
    let secondaryDisplay = document.getElementById("secondaryDisplay");

    trailingResult = 0;
    display.innerHTML = 0;
    secondaryDisplay.innerHTML = trailingResult;
}