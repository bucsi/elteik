const elem = document.querySelector("h1");


function kattintas(e){
    console.log(this)
    console.log(e)
}

elem.addEventListener("click", kattintas)

// elem.addEventListener("mouseenter", function(){
// })
elem.addEventListener("mouseenter", (e) => {
    console.log(this)
    console.log(e)
    elem.style.backgroundColor = "green";
})

elem.addEventListener("mouseleave", (e) => {
    console.log(e)
    elem.style.backgroundColor = "";
})
