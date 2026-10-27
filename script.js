// document.getElementById("counter")
// document.getElementById("entries")

let counterEl = document.getElementById("counter")
let entriesEl = document.getElementById("entries")
let count = 0 

function increment(){
    count++  // adds 1 to the count
    counterEl.innerText = count // replaces the text in the counter 
}

function reset(){
    count = 0 // resets the count to 0
    counterEl.innerText = count // replaces the text in the counter
}

function save(){
    entriesEl.textContent += count + "-"
    count = 0
}
