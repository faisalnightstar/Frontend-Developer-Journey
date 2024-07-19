let fcard = 9
let scard = 1
let cards = [fcard,scard]
// let yes = "y"
// let no= "n"
let hasBlackjack = false
let isAlive = true

let message = ""

// let sum = fcard + scard 
let sum = 0
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

function startGame(){
    renderGame()
}

function renderGame() {
    cards.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        sum+=cards[i]
        cardsEl.textContent += cards[i] + " "   
    }


    sumEl.textContent = "Sum: " + sum
    
    if (sum<=20) {
        message = "Do you want to draw new card? y/n"
    }
    else if (sum===21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    // console.log(message)
    // console.log(isAlive)
}

function newCard(){
    cards.push(6)
    // sum+=
    renderGame()

}


