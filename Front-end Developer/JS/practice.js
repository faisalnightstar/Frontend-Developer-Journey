// let nam = "Faisal"
// let greet = "Hi there"

// function greeting() {
//     let gree = greet + ", " + nam
//     console.log(gree)
// }

// greeting()


// let myPoints = 3

// function add3Points(){
//     myPoints+=3
// }

// function remove1Points(){
//     myPoints-=1

// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)

// let sum = 15


// if (sum <= 20) {
//     console.log("Do you want to draw new card? y/n")
//     const num3 = prompt("Enter the your new card: ")
//     let new_sum = sum + num3

// }
// else if (sum === 21) {
//     console.log("Wohoo! You've got Blackjack!")
// }
// else {
//     console.log("You're out of the game!")
// }

// let card = [2,3,4]
// console.log(card)
// card.push(5)
// console.log(card)

// let message = ["Hey I am sorry", " What happened"]
// console.log(message)
// let newMessage = "What"

// message.push(newMessage)

// console.log(message)

// message.pop(1)
// console.log(message)

// let greeting = ["Hello", "my name","is Abu", "Faisal"]
// let greetingEl = document.getElementById("greeting-el")

// function greet()
// {
//     for(let i=0; i<greeting.length; i++ ){
//         greetingEl.textContent += greeting[i] + " "
//         console.log(greetingEl)
//     }
// }

// // learning how to generate random number using Math.random and how to remove decimal using Math.floor

// let getRandom = Math.random() * 6 //It generate random number
// //console.log(getRandom)

// let flooredNumber = Math.floor(5.45632) // It removes the decimal
// console.log(flooredNumber)

// let flooredNum = Math.floor(Math.random() * 6)


// learning objects and functions

// let person = { // this is an object which data from different datatypes
//     name: "Faisal",
//     age: 22,
//     country: "India"
// }

// function logData(){
//     return person.name + " is " + person.age + " years old and lives in " + person.country
// }

// console.log(logData())

//practicing conditional statement

// let age = 25

// if (age<6){
//     console.log("free")
// }
// else if (age>6 && age<=17){
//     console.log("child discount")
// }

// else if (age>17 && age<=26){
//     console.log("student discount")
// }

// else if (age>26 && age<=66){
//     console.log("full price")
// }

// else {
//     console.log("Senior citizen discount")
// }

//learning Push() is adding at end of array , pop() is removing from end of an array , shift() is removing from beginning of an array , and unshift() is adding at beginning og=f an array.

let largeCountries = ["Tuvalu" , "India" , "USA", "Indonesia", "Monaco"]
//let newLargeCountries=largeCountries.shift()
largeCountries.shift() // another methode
largeCountries.pop()
largeCountries.unshift("China")
largeCountries.push("Pakistan")

//console.log(largeCountries)

//learning HOW TO RETURN RANDOM ITEM FROM AN ARRAY

let hands = ["rocks", "papers", "scissors"]

function game(){
    let randomIndex = Math.floor(Math.random(hands) * (hands.length))
    let randomHands = hands[randomIndex];
    console.log(randomHands)
}

//game()

let fruits = ["a", "o", "a", "a", "o"]
let appleShelf = ""
let orangeShelf =""

function sortFruits(){
    for (let i = 0; i < fruits.length; i++) {

        if(fruits[i]==="a"){
            appleShelf += fruits[i]
             
        }
        else{
            orangeShelf += fruits[i]
        }
        
    }
    
    console.log(appleShelf)
    console.log(orangeShelf)
}

//sortFruits()

// let practiceBtn = document.getElementById("practice-btn")

// practiceBtn.addEventListener("click", function(){
//     console.log("I want to open this box!")
// })

let cont = document.getElementById("container")
//cont.innerHTML = "<button onclick='buy()''> Buy! </button>"

const reci = "James"
const sender = " Fizz"

//function buy(){
    cont.innerHTML += `
        Hey ${reci}! </br>
        How it is going? </br>
        Cheers</br>
        ${sender}
    `
    // console.log("Thank for buying!")
