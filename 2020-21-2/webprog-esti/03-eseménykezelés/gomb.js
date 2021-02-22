const $ = string => document.querySelector(string)
$("#emergency").classList.remove("disabled")

const gombFgv = () => {
    alert("Emergency meeting")
    $("#emergency").classList.add("disabled")
    $("#emergency").removeEventListener("click", gombFgv)
    setTimeout(visszaallit, 2000)
}

const visszaallit = () => {
    $("#emergency").classList.remove("disabled")
    $("#emergency").addEventListener("click", gombFgv)
}

$("#emergency").addEventListener("click", gombFgv)

$("#test").addEventListener("click", () => console.log("Test"))
