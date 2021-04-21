const btn = document.querySelector("#toggle-menu")
const menu = document.querySelector("#menu")

btn.addEventListener("click", () => {
    if (menu.style.visibility == "visible") {
        menu.style.visibility = "hidden"
    } else {
        menu.style.visibility = "visible"
    }
})
