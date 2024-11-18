const prompt = require('prompt-sync')({sigint: true});


console.log("Shopping Cart")

const product = [{
    name: "Shirts" ,
    price: 699
} ,

{
    name: "Pants" ,
    price: 899
},

{
    name: "T-Shirts" ,
    price: 400
}]

console.log("Select the products")

const number_product = Number(prompt("Enter the number of products need : "))


console.log("products are ;")

console.log("Shirts")
console.log("Pants")
console.log("T-Shirts")

let amount = 0

for (let i = 1; i <= number_product; i++) {
let user_product = prompt("Enter the product name : ")

product.forEach((pro, index) => {
    if(pro.name === user_product.trim()) {
        amount = pro.price + amount

    }
})
  

}


if (amount >= 1000) {
    let discount = amount * (10 / 100)
    console.log(`Discount : ${discount} `)
    console.log(`Total Price: ${amount - discount}`)
}

else {
    console.log(`Total Price : ${amount}`)
}

