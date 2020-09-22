// the delegate function, from https://github.com/bucsi/elteik/tree/master/2020-21-1/webprog-english/practice-3-event-handling

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

/*

This is the complicated solution. The main point is to show you the delegating and some advanced javascript features.
We used most of these on the practice, you can use whatever style or solution you find on the actual test.

*/


let places = ['Budapest', 'Vienna', 'Bucharest', 'London', 'Berlin', 'Prague', 'Belgrade'];


//**************************************************************************** Generating the list
let list = document.querySelector('#list');
let listItems = []

places.forEach(p => {
    let newListItem = document.createElement('li');
        newListItem.innerHTML = p;
        newListItem.dataset.originalValue = p;
    list.appendChild(newListItem);
    listItems.push(newListItem);
});


//********************************************************************************** Highlighting
function highligh(event, elem){
    elem.classList.toggle('highlighted')
}
delegate(list, 'li', 'click', highligh);


//************************************************************************************* Rewriting
let textBtn = document.querySelector('#text-button');
let textInput = document.querySelector('#text');
function setTexts(){
    list
      .querySelectorAll('.highlighted')
      .forEach(elem => elem.innerHTML = textInput.value);   
}
textBtn.addEventListener('click', setTexts);

//************************************************************************************* Coloring
let colorBtn = document.querySelector('#color-button');
let colorInput = document.querySelector('#color');
let approvedColors = ['red', 'green', 'blue']

function setColors(){
    if(approvedColors.includes(colorInput.value)){
        list
        .querySelectorAll('.highlighted')
        .forEach(elem => elem.style.color = colorInput.value);
    }
}
colorBtn.addEventListener('click', setColors);

//************************************************************************************* ResetBtn
let ResetBtn = document.querySelector('#reset-button');
function reset(){
    list
      .querySelectorAll('.highlighted')
      .forEach(elem => {
        elem.innerHTML = elem.dataset.originalValue;
        elem.style.color = 'black';
      });
}
ResetBtn.addEventListener('click',reset);