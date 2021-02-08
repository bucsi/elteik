const blackDiv = document.querySelector(".parent")

function handleDivClick(event, target){
    console.log(event.target)
    target.innerHTML += "X"
}


/**
 * A function to delegate one "big" event handler to a number of alike elements inside a container.
 * @param {Node} parent A HTML element (obtained with querySelector)
 * @param {string} child A CSS selector as a string, describing children we want to handle (e.g. `'.items'`)
 * @param {string} when An event as a string, describing when we want the handler to run (e.g. `'click'`)
 * @param {Function} what The function to run on event
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


delegate(blackDiv, ".child", 'click', handleDivClick)