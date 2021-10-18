function handleJump(event) {
    if (event.code !== "Space" || state.player.isJumping) {
        return
    }
    state.player.vy = 10
}
