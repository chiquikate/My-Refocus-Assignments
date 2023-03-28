let weight; //in pounds
let height; //in inchees
let result;

let bmi = function(weight, height){
    result = weight / Math.pow(height, 2) * 703
    return result;
}

console.log(bmi(132, 61));
