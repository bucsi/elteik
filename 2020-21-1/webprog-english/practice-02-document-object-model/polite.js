/*
const list = document.querySelector("#polite")
...work with its children
*/


const items = document.querySelectorAll("li[data-polite]")

for(let i of items){
    if(i.dataset["polite"] === "true"){
        i.style.color = "green"
    }else{
        i.style.color = "red"
    }
}

// ternary operator

// logical-expression ? if-true : if-falses

document.querySelectorAll("li[data-polite]").forEach( i => i.style.color = i.dataset["polite"] === "true" ? "blue" : "red")

/***
 * function getFee(isMember) {
 *     return (isMember ? '$2.00' : '$10.00');
 * }
 * 
 * 
 * if ( isMember ){
 *     return '$2.00'
 * }else{
 *     return '$10.00'
 * }
 * 
 */