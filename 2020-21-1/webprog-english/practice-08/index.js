// task 1: was the voting fair? did everyone give out 10 points max?

                                          //      row 1      |   row2        | ...
const data = document.querySelectorAll("td") // [[4],[1],[3],[2],[0],[5],[2],[3]...]
console.log("=======================================")
//const friends = document.querySelectorAll("tr:first-of-type th:not(:first-of-type)") advanced version
const friends = document.querySelectorAll(".friend")
const activities = document.querySelectorAll(".activity") 

let totalPoints = [0,0,0,0]

for(let f=0; f<friends.length; f++){
    for(let i=0; i < friends.length * activities.length; i+=friends.length){
        console.log(`${friends[f].innerHTML} gave out ${data[i+f].innerHTML} points.`)
        totalPoints[f] += +data[i+f].innerHTML
    }
}


function handle(event, target){
    target.classList.toggle("selected")
}

/**
 * A function to delegate one "big" event handler to a number of alike elements inside a container.
 * @param {Node} parent A HTML element (obtained with querySelector)
 * @param {string} child A CSS selector (as a string), describing children we want to handle (e.g. `'.items'`)
 * @param {string} when An event as a string, describing when we want the handler to run (e.g. `'click'`)
 * @param {(ev: Event,target: Node) => void} what The function to run on event (with parameters: the event itself and the target, which will be a child)
 */
function delegate(parent, child, when, what){
    function esemenyKezelo(event){
        let eventsHandler = this;
        let closestWantedElement = event.target.closest(child);

        if(eventsHandler.contains(closestWantedElement)){
            what(event, closestWantedElement);
        }
    }

    parent.addEventListener(when, esemenyKezelo);
}

delegate(document.querySelector("table"), "td", "click", handle)