document.querySelectorAll("li:not(.ember)").forEach( elem => {
  elem.style.color = elem.dataset["tipus"] == "helyes" ? "green" : "red";
});


/**
 *  elem.dataset["tipus"] == "helyes" ? "green" : "red";
 * 
 * if(elem.dataset["tipus"] == "helyes"){
 *    "return" "green"
 * }else{
 *    "return" "red"
 * }
 * 
 */

 /** O(1)
  * 
  * css
  * 
  * [data-tipus="helyes"]{
  *  color: green;
  * }
  * [data-tipus="barkacs"]{
  *  color: red;
  * }
  */