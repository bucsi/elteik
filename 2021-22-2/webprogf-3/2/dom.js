/*
let -> általános változó
const -> nem tudod lecserélni
var -> nem javasolt
*/
const cim = document.querySelector("h1")
cim.innerHTML = "<span>Hello</span>"

const bekezdesek = document.querySelectorAll("section p")

/*
getElementById -> querySelector("#id")
getElementsByTagName -> querySelector[All]("h1")
getElementsByClassName -> querySelector[All](".id")
*/

bekezdesek.forEach(bekezdes => {
    bekezdes.style.background = "lightblue"
    bekezdes.style.borderRadius = "10px"
    // html/css <-> js fordítás
    // border-radius <-> borderRadius
    bekezdes.classList.add("keretezett", "masik", "harmadik")
})