 /**
 * Tests a functions return value, and prints it in a nice format.
 * 
 * @param {string} test - The function call to be tested, as a string
 * @param {any} returns - The expected return
 */
function expectedReturn(test, returns) {
   
    const res = eval(test)
    const assertion = res === returns
    const color = assertion ? "color:blue" : "color: red"
    const msg = assertion? "%c  [OK]" : `%c  Should be ${returns}!`
    console.log("%c" + test + " → " + res + msg, "color:black;", color)
}
