const resultText = document.getElementById("resultText")

let firstNumber = 0;
let secondNumber = 0;
let step = 0;
let currentOperator = "";
const numArray = [];
const numArray2 = [];

function getNum(num){
    if (step === 0 || step === 1){
        numArray.push(num);
        firstNumber = +numArray.join("");
        resultText.textContent = +firstNumber;
        step = 1
    } else if (step === 2 || step === 3){
        numArray2.push(num);
        secondNumber = +numArray2.join("")
        resultText.textContent = +secondNumber;
        step = 3
    }
}
function getDot(){
    if (step === 0 || step === 1 ){
        numArray.push(".");
        firstNumber = +numArray.join("");
        console.log(numArray)
        resultText.textContent = firstNumber;
        step = 1
    }  else if (step === 2 || step === 3){
        numArray2.push(".");
        secondNumber = +numArray2.join("")
        resultText.textContent = secondNumber;
        step = 3
    }
}

function getOperator(op){
    if (step === 1){
        if (op === 1){
            currentOperator = "divide"
        } else if (op === 2){
            currentOperator = "multiply"
        } else if (op === 3){
            currentOperator = "add"
        } else {
            currentOperator = "minus"
        } 
        step = 2
    } else if (step === 3){
        resultText.textContent = equalButton();
        firstNumber = resultText.textContent;
        numArray.length = 0;
        numArray2.length = 0;
        numArray.push(firstNumber);
        step = 1
        if (op === 1){
            currentOperator = "divide"
        } else if (op === 2){
            currentOperator = "multiply"
        } else if (op === 3){
            currentOperator = "add"
        } else {
            currentOperator = "minus"
        } step = 3
    }
}

function equalButton(){
    if (currentOperator === "divide"){
        resultText.textContent = Number(firstNumber) / Number(secondNumber);
        return resultText.textContent;
    } else if (currentOperator === "multiply"){
        resultText.textContent = Number(firstNumber) * Number(secondNumber);
        return resultText.textContent;
    } else if (currentOperator === "add"){
        resultText.textContent = Number(firstNumber) + Number(secondNumber);
        return resultText.textContent;
    } else if (currentOperator === "minus"){
        resultText.textContent = Number(firstNumber) - Number(secondNumber);
        return resultText.textContent;
    }
}

function clearButton(){
 firstNumber = 0;
 secondNumber = 0;
 step = 0;
 currentOperator = "";
 numArray.length = 0;
 numArray2.length = 0;
 resultText.textContent = ""
}



function deleteButton(){
    if (step === 0 || step === 1){
        numArray.pop();
        firstNumber = +numArray.join("");
        resultText.textContent = +firstNumber;
        step = 1
    } else if (step === 2 || step === 3){
        numArray2.pop();
        secondNumber = +numArray2.join("")
        resultText.textContent = +secondNumber;
        step = 3
    }
}