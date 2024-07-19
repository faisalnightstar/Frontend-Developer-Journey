let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")
function add(){
    let sum = num1 + num2
    sumEl.textContent = "8" + "+" + "2 = " +sum   
}

function substract(){
    let result = num1 - num2
    sumEl.textContent = "8" + "-" + "2 = " + result
}

function multiply(){
    let result = num1 * num2
    sumEl.textContent = "8" + "x" + "2 = " + result
}

function divide(){
    let result = num1 / num2
    sumEl.textContent = "8" + "/" + "2 = " + result
}