const jeloltek = [
    "Vezér Viktor",
    "Szakács Szilárd",
    "Jogász Judit",
    "Nagycsaládos Katalin",
    "Európai Tamás"
]

const jeloltLista = document.querySelector("ul");

jeloltek.forEach(j => {
    const li = document.createElement("li");
    li.innerText = j;
    li.classList.add("jelolt");
    li.classList.add("bejutott");
    jeloltLista.appendChild(li);
})