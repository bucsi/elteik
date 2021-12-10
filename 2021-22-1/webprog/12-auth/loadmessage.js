const btns = document.querySelectorAll(".message-load-btn")
const msgContainer = document.querySelector("#message-container")
const msgFrom = document.querySelector("#message-from")
const msgTo = document.querySelector("#message-to")
const msgSubject = document.querySelector("#message-subject")
const msgContent = document.querySelector("#message-content")

msgContainer.classList.toggle("hidden")

btns.forEach(btn => {
    btn.addEventListener("click", async () => {
        const response = await loadMessageWithPostRq(btn.dataset.id)

        if (response.status === "error") {
            if (!msgContainer.classList.contains("hidden")) {
                msgContainer.classList.toggle("hidden")
            }
            alert(response.message)
            return
        }

        if (msgContainer.classList.contains("hidden")) {
            msgContainer.classList.toggle("hidden")
        }
        console.log(response)
        msgFrom.innerHTML = response.data.from
        msgTo.innerHTML = response.data.to
        msgSubject.innerHTML = response.data.subject
        msgContent.innerHTML = response.data.content
    })
})

async function loadMessage(id) {
    //ez működik, ha a PHP script GET requestet vár
    const r = await fetch(`message-gettel.php?id=${id}`)
    const json = await r.json()
    return json
}

async function loadMessageWithPostRq(id) {
    //ez működik, ha a PHP script POST requestet vár
    const r = await fetch("message-posttal.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${id}`, //ide az kerül, ami GET request esetén a "kérdőjel után" jönne.
    })
    const json = await r.json()
    return json
}

/*

AJAX
Asynchronous JavaScript and XML


XMLHttpRequest
fetch
*/
