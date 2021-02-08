const heading = document.querySelector('h1')
const btn = document.querySelector("#emergency")
const test = document.querySelector("button:not(#emergency)")

let timeout = ms => new Promise(r => setTimeout(r,ms));


//* INTERACTIVE H1 SOLUTION
function coloring(ev){
    console.log(this)
    console.log(ev)
    this.style.backgroundColor = 'green'; //if we use a named event handler function, we can use `this`, its bound to the object
}
heading.addEventListener('click', coloring)
// anonymous handler
// heading.addEventListener('mouseleave', function() { 
// })
heading.addEventListener('mouseleave', () => {
    ///console.log(this)
    //this.style.backgroundColor = '; //! anonymous function -> this = Window
    heading.style.backgroundColor = ''
})


//* EMERGENCY MEETING SOLUTION
test.addEventListener("click", () => {
    console.log("it works");
})

async function emergency(){
    //print
    console.log("EMERGENCY MEETING")

    //disable
    console.log("disabled")
    btn.classList.toggle("disabled")
    btn.removeEventListener("click", emergency)

    //sleep
    await timeout(5000)

    //enable
    btn.classList.toggle("disabled")
    console.log("enabled")
    btn.addEventListener("click", emergency)
}

btn.addEventListener("click", emergency)
//btn.removeEventListener( {event}, {handler_fn})