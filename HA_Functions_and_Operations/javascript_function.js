let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
}

function showData (obj){
    console.log("First Number: " + obj.num1);
    console.log("Second Number: " + obj.num2);
    console.log("The sum is: " + obj.sum);
    console.log("The difference is: " + obj.difference);
    console.log("The product is: " + obj.product);
    console.log("The quotient is: " + obj.quotient);
}

function add (num1, num2){
    console.log(num1 + num2);
}

function subtract (num1, num2){
    console.log(num1 - num2);
}

function multiply (num1, num2){
    console.log(num1 * num2);
}

function divide (num1, num2){
    console.log(num1 / num2);
}

function newSetOfNumbers (num1, num2){
    obj.num1 = num1;
    obj.num2 = num2;
    obj.sum = num1 + num2;
    obj.difference = num1 - num2;
    obj.product = num1 * num2;
    obj.quotient = num1 / num2;
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log("The sum is: " + obj.sum);
    console.log("The difference is: " + obj.difference);
    console.log("The product is: " + obj.product);
    console.log("The quotient is: " + obj.quotient);
}

showData(obj);
newSetOfNumbers(200, 10);
newSetOfNumbers(500, 20);
