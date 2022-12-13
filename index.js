//document.getElementById("count-el").innerText=5
// search the html document, get the element by id COUNT-EL

//camelCase
let countEl=document.getElementById("count-el")

let count=0

function increment(){
    count=count+1
    countEl.innerText=count
    //innerText is the text inside of the tags
}
//getElementById & log both are functions just like our increment function
//they're hooked to ducument & console objects

// welcome message
// let names="Yash !!"
// let greeting="Hi, Have a Good Day, "

// let welcomeEl=document.getElementById("welcome-el")
// welcomeEl.innerText=greeting+names

// save function
let saveEl=document.getElementById("save-el")

function save(){
    let prev=count+" - "
    // console.log(saveEl.innerText+=prev)
    //inner text ignores text that's not readable by human 
    //that's why space at the end is lost
    console.log(saveEl.textContent+=prev)
    count=0
    countEl.innerText=0

}

//