// let value;

// getting reference of inputs
const form = document.getElementById("form")
const incrementInput = document.getElementById("increment");

//preventing reload 
form.addEventListener("submit", (e) => {
    e.preventDefault()
})

// keyboard event
incrementInput.addEventListener("keydown", (e) =>{
    
    if(e.key === "Enter"){
        const value = incrementInput?.value
        console.log(value)
    }
})

// const incrementValue = (e) =>{
//     console.log("outer func",e)
// }