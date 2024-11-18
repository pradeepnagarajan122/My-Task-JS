const prompt = require('prompt-sync')({sigint: true});

console.log("Choose the Option Any One ")
console.log("Option 1 : Convert Celsius to Fahrenheit ")
console.log("Option 2 : Convert  Fahrenheit to Celsius ")
console.log("Option 3 : Convert Celsius to Kelvin ")

let option = prompt("Enter the option : ")

if (option == 1){
    let celsius  = Number(prompt("Enter the Celsius value : "))
    console.log("Fahrenheit :", (9 /5 * celsius) + 32)

}
else if (option == 2) {
    let fahrenheit = Number(prompt("Enter the  Fahrenheit value"))
    let celsious=(fahrenheit-32)*(5/9)
    console.log(`${celsious.toFixed(2)}`)

    

}
else{
    let kelvin = Number(prompt("Enter the Celsius value"))
    console.log(`Kelvin : ${kelvin + 273.15}`)

}