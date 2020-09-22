let places = ['Budapest', 'Vienna', 'Bucharest', 'London', 'Berlin', 'Prague', 'Belgrade'];

//************************************************************** Generating the list items
let list = document.querySelector('#list');
for(let p of places){
    let newListItem = document.createElement('li');
        newListItem.innerHTML = p;
        //for later, we will use this when resetting highligted elements
        newListItem.dataset.originalValue = p
    list.appendChild(newListItem);
}
let listItems = list.querySelectorAll('li');


//********************************************* Appending event handlers (for highlighting)
// this could be done with delegating
for(let li of listItems){
    li.addEventListener('click', ()=>{
        li.classList.toggle('highlighted')
    });
}


//************************************************************************* Rewrite button
let textBtn = document.querySelector('#text-button');
let textInput = document.querySelector('#text');
function setTexts(){
    let highlihtedElements = list.querySelectorAll('.highlighted');
    for(let elem of highlihtedElements){
        elem.innerHTML = textInput.value;
    }
}
textBtn.addEventListener('click', setTexts);


//************************************************************************* Recolor button
let colorBtn = document.querySelector('#color-button');
let colorInput = document.querySelector('#color');
let approvedColors = ['red', 'green', 'blue']
function setColors(){
    if(approvedColors.includes(colorInput.value)){
        let highlihtedElements = list.querySelectorAll('.highlighted');
        for(let elem of highlihtedElements){
            elem.style.color = colorInput.value;
        }
    }
}
colorBtn.addEventListener('click', setColors);


let resetBtn = document.querySelector('#reset-button');
function reset(){
    let highlihtedElements = list.querySelectorAll('.highlighted');
    for(let elem of highlihtedElements){
        elem.innerHTML = elem.dataset.originalValue; //see row 8
        elem.style.color = 'black';
    }
}
resetBtn.addEventListener('click',reset);