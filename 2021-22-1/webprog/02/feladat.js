const fegyverek = [
    {
        weapon: 'Mosin',
        type: 'Sniper rifle',
        durability: 92
    },
    {
        weapon: 'Vepr KM/VPO-136',
        type: 'Assault Rifle',
        durability: 69
    },
    {
        weapon: 'AKM',
        type: 'Assault Rifle',
        durability: 98
    },
    {
        weapon: 'M4A1',
        type: 'Assault Rifle',
        durability: 100
    },
    {
        weapon: 'SKS',
        type: 'Assault carbine',
        durability: 55
    },
    {
        weapon: 'Kel-Tec RFB',
        type: 'Assault carbine',
        durability: 100
    },
    {
        weapon: 'SV-98',
        type: 'Sniper rifle',
        durability: 87
    }
]
const lista = document.createElement("ul")

fegyverek.forEach(f => {
    const item = document.createElement("li")
    item.innerText = f.weapon
    item.dataset.durability = f.durability
    item.dataset.type = f.type
    item.style.fontStyle = f.type.endsWith("ifle") ? "italic" : ""
    item.style.fontWeight = !f.type.endsWith("Rifle") ? "bold" : ""
    item.style.color = f.durability < 70 ? "red" : "green"
    lista.appendChild(item)
})
document.body.appendChild(lista)


