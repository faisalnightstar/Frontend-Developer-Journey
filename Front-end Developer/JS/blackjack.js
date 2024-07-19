let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {name: "Faisal" , chips: 145} //this is object, it is like a array of different data type. object content key value pair

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": ₹" + player.chips



function getRandomCard() 
{
    // let getRandom = Math.random() * 6 //It generate random number
    let flooredNumber = Math.floor(Math.random() * 13) + 1
    // return flooredNumber
    //return Math.floor(Math.random() * 13) + 1
    if (flooredNumber > 10) {
        return 10
    }
    else if (flooredNumber === 1) {
        return 11
    }
    else {
        return flooredNumber
    }
}

function startGame() 
{
    isAlive = true
    let fcard = getRandomCard()
    let scard = getRandomCard()
    cards = [fcard, scard]
    sum = fcard + scard
    renderGame()
}

function renderGame() 
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Want to play a round?"
        // hasBlackjack = true
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "You are out of game"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() 
{
    if (isAlive === true && hasBlackjack===false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}