const form = document.querySelector("form")
const lista = document.querySelector("ul")

let obj = JSON.parse(localStorage.getItem("mentettAdat"))


for(f in obj){
    console.log(f)
    lista.appendChild(ujElem(obj[f], f))
}

/**
 * Létrehoz egy pici listát a határidőből és a feladatból.
 * @param {string} hatarido 
 * @param {string} feladat 
 * @returns {HTMLUListElement} egy `ul` elem
 */
function ujElem(hatarido, feladat){
    const szulo = document.createElement("ul")
    const gy1 = document.createElement("li")
    const gy2 = document.createElement("li")
    gy1.innerHTML = hatarido
    gy2.innerHTML = feladat
    szulo.appendChild(gy1)
    szulo.appendChild(gy2)
    return szulo
}

document.addEventListener("submit", (e)=>{
    e.preventDefault()
    

    obj[form.feladat.value] = form.hatarido.value

    localStorage.setItem("mentettAdat", JSON.stringify(obj))

    lista.innerHTML = ""
    
    for(f in obj){
        console.log(f)
        lista.appendChild(ujElem(obj[f], f))
    }

})


