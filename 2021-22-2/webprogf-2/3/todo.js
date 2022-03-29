const lista = document.querySelector("ul")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let ujLi = document.createElement("li")
    ujLi.innerHTML = "Feladat"
    lista.appendChild(ujLi)
})

let listaelemek = document.querySelectorAll("li")
listaelemek.forEach(li => {
    li.addEventListener("click", handleLiClick)
})

function handleLiClick(ev) {
    this.classList.toggle("done")
}
