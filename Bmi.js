const prompt = require('prompt-sync')({sigint: true});

console.log(" BMI Calculator ")

let weight = Number(prompt("Enter the user weight(in kg) : "))
let height = Number(prompt("Enter the user height(in kg) : "))

let bmi = weight / (Math.pow(height, 2))

console.log(bmi.toFixed(2))

if (bmi < 18.5) {
    console.log("low weight")
}
else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("Normal Weight")
}
else if (bmi >= 25 && bmi < 29.9) {
    console.log("high weight")
}
else {
    console.log("Obesity")
}