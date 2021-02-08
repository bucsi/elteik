/*
Task 2.

Aliens are constantly monitoring people on the planet.
- Everybody who is under 20 years is interesting to them,
  so they mark those people with *bold* formatting.
- Everybody with a `t` in their name is also interesting
  to them, so they mark those people with an _underline_
- If both apply to a person, they use both marks.

Generate the aliens' list with the `people` below

*/

const alienList = document.querySelector("ul")

const people = [
    {name: 'Szűts Viktória', age: 19},
    {name: 'Ikea Nándor', age: 56},
    {name: 'Frappáns Patrik', age: 10},
    {name: 'Hoska Áron', age: 23},
    {name: 'Lajka Henrietta', age: 18},
    {name: 'Csíkos Míra', age: 48},
    {name: 'József Erik', age: 3},
    {name: 'Bucsári Katalin', age: 15},
    {name: 'Bogár Tamás', age: 20}
]

people.forEach( p => {
    const LI = document.createElement("li")
    LI.innerHTML = `${p.name} (${p.age})`
    if(p.name.toLowerCase().includes("t")){
        LI.style.textDecoration = "underline"
    }
    if(p.age < 20){
        LI.style.fontWeight = "bold"
    }
    alienList.appendChild(LI)
});