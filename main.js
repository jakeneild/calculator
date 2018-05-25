function add(){
    console.log("adding");
    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    let total = num1 + num2;
    console.log(total);
    document.getElementById("output").value = total;
}

function subtract(){
    console.log("adding");
    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    let total = num1 - num2;
    console.log(total);
    document.getElementById("output").value = total;
}

function multiply(){
    console.log("adding");
    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    let total = num1 * num2;
    console.log(total);
    document.getElementById("output").value = total;
}

function divide(){
    console.log("adding");
    let num1 = document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2 = document.getElementById("num2").value;
    num2 = parseInt(num2);
    let total = num1 / num2;
    console.log(total);
    document.getElementById("output").value = total;
}

document.getElementById("add").addEventListener("click", add);
document.getElementById("subtract").addEventListener("click", subtract);
document.getElementById("multiply").addEventListener("click", multiply);
document.getElementById("divide").addEventListener("click", divide);