let cells = document.querySelectorAll(".cell")


// TASK 1

const input = document.querySelector("input")

input.addEventListener("change", () => {
    let result = 0;
    for(c of input.value){
        if(["0", "6", "9"].includes(c)){
            result++
        }else if(c === "8"){
            result += 2;
        }
    }
    console.log(result);
})







// TASK 2

const teachers = [
    {
      name: "Gergő Márton ",
      hunLessons: 1,
      engLessons: 1,
    },
    {
      name: "Tamás Győztes ",
      hunLessons: 0,
      engLessons: 2,
    },
    {
      name: "Sándor Rendes",
      hunLessons: 5,
      engLessons: 0,
    },
    {
      name: "Vikthor Visno ",
      hunLessons: 3,
      engLessons: 0,
    },
    {
      name: "Erik Horgász",
      hunLessons: 2,
      engLessons: 1,
    },
];

const task2div  = document.querySelector("#task2")

let table = document.createElement("table");
let tr_head = document.createElement("tr");
for(let heading of ["name", "salary"]){
    let th = document.createElement("th");
    th.innerHTML = heading;
    tr_head.appendChild(th)
}
table.appendChild(tr_head)
task2div.appendChild(table)

for(t of teachers){
    if(t.name.toLowerCase().includes('t')){
        let row = document.createElement("tr")
        let nameCell = document.createElement("td")
        let salaryCell = document.createElement("td")

        nameCell.innerHTML = t.name;

        let hunSalary = t.hunLessons * 1.5 * 1490;
        let bonus = Math.floor(t.engLessons / 2) * 1490;
        let engSalary = t.engLessons * 1490 + bonus;

        salaryCell.innerHTML = hunSalary + bonus + engSalary;

        row.appendChild(nameCell);
        row.appendChild(salaryCell);;

        table.appendChild(row);
    }
}

// TASK 3

let isAnXNext = false
function handleClick(event){
    //this = cell
    if(event.target.innerHTML === ""){
        //put a mark
        if(isAnXNext){
            event.target.innerHTML = "X"
            isAnXNext = false

        }else{
            event.target.innerHTML = "O"
            isAnXNext = true
        }
    }else{
        console.log("occupied!")
    }
}

function handleClick2(e, t){
    if(!event.target.innerHTML){
        event.target.innerHTML = isAnXNext ? "X" : "O"
        isAnXNext = !isAnXNext;
    }
}

for(let c of cells){
    //c.addEventListener("click", handleClick2)
}

/**
 * A function to delegate one "big" event handler to a number of alike elements inside a container.
 * @param {Node} parent A HTML element (obtained with querySelector)
 * @param {string} child A CSS selector (as a string), describing children we want to handle (e.g. `'.items'`)
 * @param {string} when An event as a string, describing when we want the handler to run (e.g. `'click'`)
 * @param {(ev: Event,target: Node) => void} what The function to run on event (with parameters: the event itself and the target, which will be a child)
 */
function delegate(parent, child, when, what){
    function eventHandler(event){
        let eventsHandler = this;
        let closestWantedElement = event.target.closest(child);

        if(eventsHandler.contains(closestWantedElement)){
            what(event, closestWantedElement);
        }
    }

    parent.addEventListener(when, eventHandler);
}

delegate(document.querySelector("#tictactoe"), ".cell", "click", handleClick2)

