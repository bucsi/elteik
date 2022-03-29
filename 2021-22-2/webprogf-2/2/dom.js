console.log("Script betöltött.")

/*
let -> "általános" változó
const -> konstans, nem lehet más értéket belerakni, DE MÓDOSÍTHATÓ!
!!!!!
var -> régi változó, globális, elronthatja a kódod
!!!!!
*/
const cim = document.querySelector("h1")
const szekciok = document.querySelectorAll("section")
/*
getElementById -> querySelector("#id")
getElementsByClassName -> querySelectorAll(".class")
getElementsByTagName -> querySelectorAll("tag")
*/

console.log(cim)
cim.innerHTML = "Hello"

/*for(let szekcio of szekciok){...}*/

szekciok.forEach(szekcio => {
    szekcio.style.background = "lightblue"
    szekcio.style.borderRadius = "10px"
    szekcio.classList.add("keretezett")
})

/*
section{
    bacground: lightblue;
    border-radius: 10px;
}

*/