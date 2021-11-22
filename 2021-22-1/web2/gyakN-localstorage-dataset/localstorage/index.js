//todo
//deklaratív render
//perzisztens
const data = loadFromStorage("todo") || []
const form = document.querySelector("form")
const list = document.querySelector("ul")

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    if (str) {
        return JSON.parse(str)
    } else {
        //ha undefined volt (nem volt elmentve Storageban)
        return undefined
    }
}

function saveToStorage(key, value) {
    console.log(value)
    localStorage.setItem(key, JSON.stringify(value))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    data.push(form.todo.value)
    saveToStorage("todo", data)
    form.todo.value = ""
    list.innerHTML = render(data)
    console.log(localStorage.todo)
})

const render = data => data.map(el => `<li>${el}</li>`).join("\n")

list.innerHTML = render(data)
