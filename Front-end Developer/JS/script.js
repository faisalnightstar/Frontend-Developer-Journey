let countEl = document.getElementById("count-el")
// console.log(countEl)
let count = 0
function increment() {
    count = count + 1
    countEl.innerText = count

}



let num = increment()
let welcomeEl = document.getElementById("welcome-el")
let username = "Faisal"
let greeting = "Hi, my name is "
let greet = greeting + username
welcomeEl.innerText = greet
welcomeEl.innerText += "👋"



let saVe = document.getElementById("save")
let str = "Previos entries: "
let entries = str + num
saVe.innerText = entries



let saveEl = document.getElementById("save-el")
function save(){
    let entriesStr = count + " - "
    // saveEl+=entries
    saveEl.innerText += entries
    console.log(saveEl)
}