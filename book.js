const prompt = require('prompt-sync')({sigint: true});



// console.log("Seat Booking")
// console.log("choose the best option any one")
// console.log("option 1 : Platinum: ₹190")
// console.log("option 2 : Gold: ₹150")
// console.log("option 3 : Silver: ₹100")
console.log("your login id (pradeep)")
console.log("Enter your seat place (platinum,gold)")


const login = prompt("Enter your name : ")
const option = prompt("Enter the seat style :")

const ticket = Number(prompt("Enter the number of ticket need:"))

if(login === "pradeep"){

    console.log("login successfully")

if(option === "platinum") {
    let amount = ticket * 190 
    console.log(`Total Ticket Amount : ${amount}`)
   
}
else if (option === "gold") {
    let amount = ticket * 150 
    console.log(`Total Ticket Amount : ${amount}`)


}
else if(option === "ronage") {
    let amount = ticket * 100 
    console.log(`Total Ticket Amount : ${amount}`)


}
else{
    console.log("please select your seat")
}
}
else{
    console.log("please login")
}