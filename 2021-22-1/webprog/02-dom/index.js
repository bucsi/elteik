const tablazat = document.querySelector("table")
const utoloso = document.querySelector("#utolso")
const elsoPrim = document.querySelector(".prim")
const lista = document.querySelector("ol")

//bejárás
for (const c of lista.children) {
    console.log(c)
}

//adott sorszámú elem lekérése
lista.children[2]
//gyerekek száma
lista.children.length

// bejárás tömbfüggvénnyel
// a HTMLCollection nem tömb, nincsenek rajta tömbfüggvények!
Array.from(lista.children).forEach(c => console.log(c))

for (const sor of tablazat.rows) {
    console.log(sor)
    for (const cella of sor.cells) {
        cella.style.color = "red"
        cella.dataset.szam = cella.innerText
    }
}
/*
tablazat.rows[2].cells[3].innerHTML = "<b>ELte a legjobb</b>"
tablazat.rows[2].cells[2].innerText = "<b>ELte a legjobb</b>"
*/

console.log(document.querySelector("ol li").dataset)
for (const k in document.querySelector("ol li").dataset) {
    console.log(k)
}

const homokozo = document.querySelector("#homokozo")
homokozo.innerHTML += "<h1>Hello</h1>"
for(let i=2; i<=5; i++){
    homokozo.innerHTML += `<h${i}>${i}. szintű címsor</h${i}`
}

document.querySelectorAll(".prim").forEach(prim => prim.style.fontSize = "3em")






const gomb = document.createElement("button")
gomb.innerText = "Nyomj meg!"
gomb.style.color = "red"
homokozo.appendChild(gomb)

const ujTabla = document.createElement("table")

for(let i=0; i<3; i++){
    const ujSor = document.createElement("tr")
    for(let j=0; j<2; j++){
        const ujCella = document.createElement("td")
        ujCella.innerText = `${i+1}-ik sor, ${j+1}-ik oszlop`
        ujSor.appendChild(ujCella)
    }
    ujTabla.appendChild(ujSor)
}
homokozo.appendChild(ujTabla)