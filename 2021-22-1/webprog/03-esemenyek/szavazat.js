const buttons = document.querySelectorAll("button")

// button.parentElement.firstElementChild
//                = >
buttons.forEach(b => b.addEventListener("click", handleSzavazat))

function handleSzavazat(){
    const szavazatok = this.parentElement.firstElementChild
    szavazatok.innerText = parseInt(szavazatok.innerText) + 1
}