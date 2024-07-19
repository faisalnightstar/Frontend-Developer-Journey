let myLeads = [] //the filled textbox and clicked then the data store
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn") //the main difference b/w let and const is that const value is not reassign but let will reassign the value
const ulEl = document.getElementById("ul-el")


localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    myLeads.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    //myLeads = []
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads(){

    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {

        //    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

       //this another methode for render in ul element instead of innerHTML
    //    const li = document.createElement("li")
    //    li.textContent = myLeads[i]
    //    ulEl.append(li)

//this is way we increasing performance of the code.  inside of for loop instead manipulating the DOM in every iteration of for loop using variable
    //listItems += "<li>" +"<a href='"+ myLeads[i] +"' target='_blank' >" + myLeads[i] +"</a>"+ "</li>"
    
//another way of writing above line which is look like a HTML
        listItems += 
        `
            <li>
                <a href='${myLeads[i]}' target='_blank' >
                    ${myLeads[i]}
                </a>
            </li>
        `
        //console.log(ulEl)
        
    }

    ulEl.innerHTML = listItems

}