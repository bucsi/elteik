/**======================================= *
 * Web-programming - english course #2     *
 * First practice (2020. september 08.)    *
 *======================================= */

/** Javascript basics
    * language features:
        * interpreted
            * runs in a special container: our browsers (like Java in VMs)
    * weakly typed
    * dynamic typing
    * multiparadigm
    * official name: ECMAScript
 */ 


//* Basic types, variables and operators


let aNumber = 123
let aFloat = 0.69
expectedReturn("typeof(aNumber)", "number") //custom assert()-like function
expectedReturn("typeof(aFloat)", "number")

let aString = "Hello there" //value cant be changed
expectedReturn("typeof(aString)", "string")

let boolValue = true
expectedReturn("typeof(boolValue)", "boolean")

//* NOTE: semicolon ; is not expected at the end of lines

let emtpy; //semicolon is there to mark that I didn't forget finishing the line
expectedReturn("typeof(empty)","undefined")



const lightspeed = 299792458 // metres per second
// constant value, can't be changed later



//! DO NOT USE
var oldVariable = "don't use this"
//! this can be found in old tutorials on the internet. `var` doesn't bind variables to scope, causes problems with loops et al.



//* Arrays
let a = [1,2,3,4,5,6,7,8,9,10]
expectedReturn("typeof(a)", "array")
//! When used, complex types have `object` type
expectedReturn("typeof(a)", "object")

// accessing a value works like in an usual array or list
expectedReturn("a[0]", 1)


// can contain any type of values

let b = [0, "asd", true, [1,2,[3,3]]]

expectedReturn("typeof(b[1])", "string")
expectedReturn("typeof(b[2])", "boolean")
expectedReturn("typeof(b[3])", "object")


//* Working with arrays

// Task: Is there a number less than 2?
// usual solution
for(let i=0; i<a.length; i++){
    if(a[i] < 2){
        console.log("less than 2 found at position " + i)
        break; // we dont have to loop after we have a result
    }
}

// the javascript way
// we define a helper function: (note the sytax for defining a function)

function isLessThanTwo(num){
    if(num < 2){
        return true;
    }else{
        return false;
    }
}

// and then call an ARRAY FUNCTION, with our helper as a parameter
console.log("array has numbers less than 2: " + a.some(isLessThanTwo))
console.log("every num in array is less than 2: " + a.every(isLessThanTwo))



// Another ARRAY FUNCTION is map: do something on each data entry
// Task: find the double of each number in a

// note the functional style of declaring a function
let doubler = (n) => n*2
console.log(a.map(doubler))

// filter array function
// Task: find even numbers in array

// note that we can use a functional style function as a parameter for our array function
// this is called an anonymous function
console.log(a.filter(   (x) => x % 2 === 0   ))

// reduce: accumulates array into one variable
// Task: sum the array

console.log(a.reduce(   (acc, x) => acc + x   ))


//* Custom object / record type
// key - value pairs, like a C struct or a python dictionary
// keys are strings by default, no need to put "" around them
// just like an array, can have values of any type

teacher = {
    name: "Bucsi",
    age: 23,
    fav_subjects: ["web-dev1", "webprog"],
    pet: {
        species: "cat",
        name: "Amy",
        color: ["gray", "white", "red"],
        numOfLegs: 4  
    }
}


students = [
    {
        name: "John",
        favorite: "hamburgers"
    },
    {
        name: "Ashley",
        favorite: "beer"
    },
    {
        name: "Travis",
        favorite: "banana smoothie"
    },
    {
        name: "Laura",
        favorite: "ice cream"
    }
]

// Task: loop thrugh students, and print `|student.name|'s favorite to |eat/drink| is |sstudent.favorite|`


for(s of students){
    console.log(`${s.name}'s favorite to ${edibleOrNot(s.favorite)} is ${s.favorite}`)
}

function edibleOrNot(p){
    if(["beer", "banana smoothie"].includes(p)){
        return "drink"
    }else{
        return "eat"
    }
}