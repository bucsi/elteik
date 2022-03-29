let score = 0
const scoreDisplay = document.querySelector("span")
export function onTimer() {
    score++
    scoreDisplay.innerHTML = `Score : ${score}`
}

export function getScore() {
    return score
}

export function resetScore() {
    score = 0
}
