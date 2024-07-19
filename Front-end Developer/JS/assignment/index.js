let imgs = [
    "image/1.jpeg",
    "image/2.jpeg",
    "image/3.jpeg"
]

let container = document.getElementById("container")

function renderImages(){
    let imgsDOM = ""
    for(let i=0; i<imgs.length; i++){
        //imgsDOM += `<img class:"team-img" src:"${imgs[i]}">`
        imgsDOM += `<img src="${imgs[i]}"  class="team-img">`
    }
    container.innerHTML = imgsDOM
}
renderImages()
//console.log(renderImages())
