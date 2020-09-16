//* 1. feladat data -> ul/li.
const lista = document.querySelector("ul")

let nevek = [
    {nev: 'Szűts Viktória', kor: 19},
    {nev: 'Ikea Nándor', kor: 56},
    {nev: 'Frappáns Patrik', kor: 10},
    {nev: 'Hoska Áron', kor: 23},
    {nev: 'Lajka Henrietta', kor: 18},
    {nev: 'Csíkos Míra', kor: 48},
    {nev: 'József Erik', kor: 3},
    {nev: 'Bucsári Katalin', kor: 15},
    {nev: 'Bogár Tamás', kor: 20}
]

nevek.forEach( n => {
    let newitem = document.createElement("li")
    newitem.innerHTML = `${n.nev} (${n.kor})`
    newitem.classList.add("ember") // kompatibilitás a barkacs feladattal
    if(n.nev.toLowerCase().includes("t")){
        newitem.style.textDecoration = "underline"
    }
    if(n.kor >= 20){
        newitem.style.fontWeight = "bold"
    }

    lista.append(newitem)
})