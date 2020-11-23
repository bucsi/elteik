const btn = document.querySelector("#emergency");
const test = document.querySelector("button:not(#emergency)")

let timeout = ms => new Promise(r => setTimeout(r,ms));


async function emergencyKezelo(){
    console.log("Emergency meeting")
    btn.classList.add("disabled")
    btn.removeEventListener("click", emergencyKezelo)
    await timeout(3000);
    console.log("a")
    btn.classList.remove("disabled")
    console.log("Re-enabed")
    btn.addEventListener("click", emergencyKezelo)
}

btn.addEventListener("click", emergencyKezelo)


test.addEventListener("click", ()=>{
    console.log("TESZT")
})