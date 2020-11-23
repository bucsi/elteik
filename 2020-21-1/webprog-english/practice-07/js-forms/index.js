const form = document.querySelector("form")
const errList = document.querySelector("#errorList")
let review = JSON.parse(localStorage.getItem("review"))

if(review){
    form.name.value        = review.name
    form.age.value         = review.age
    form.stars.value      = review.stars
    form.acquisition.value = review.acq 
    form.review.value      = review.text 
    form.subscribe.checked = review.subscribe
}

/**
 * Create and return a new `li` element with `content` as it's `innerHTML`
 * @param {string} content 
 */
function setListItem(content){
    const newLi = document.createElement("li")
    newLi.innerHTML = content
    newLi.addEventListener("mouseenter", ()=>{
        setTimeout(()=>{
            newLi.style.display = "none"
        }, 2000)
    })
    return newLi
}
/**
 * Check for errors in the form.
 * @returns an object containing validated input
 */
function checkErrors(){
    let errors = []
    let result = {
        name: "",
        age: -1,
        stars: -1,
        acq: "",
        text: "",
        subscribe: false
    }

    if(form.name.value.trim() === ""){
        errors.push("The reviewer has to have a name!")
    }

    if(form.age.value.trim() === ""){
        errors.push("The reviewer has to have an age!")
    }else if( isNaN(form.age.value) ){
        errors.push("Your age has to be a number!")
    }else if(parseInt(form.age.value) < 18){
        errors.push("Minors can't write reviews!")
    }

    if( ! ["1","2","3","4","5"].includes(form.stars.value) ){
        errors.push("Your star input is invalid. Please reload the page!")
    }

    if( ! ["sample", "paidFor", "borrowed"].includes(form.acquisition.value) ){
        errors.push("Your acquisition input is invalid. Please reload the page!")
    }

    if(errors.length > 0){
        for(e of errors){
            errList.appendChild(setListItem(e))
        }
    }else{
        result.name      = form.name.value
        result.age       = parseInt(form.age.value)
        result.stars     = parseInt(form.stars.value)
        result.acq       = form.acquisition.value
        result.text      = form.review.value
        result.subscribe = form.subscribe.checked

        return result
    }  


}


document.addEventListener("submit", (event)=>{
    event.preventDefault()
    
    review = checkErrors()

    if(review){
        localStorage.setItem("review", JSON.stringify(review))
    }

})


