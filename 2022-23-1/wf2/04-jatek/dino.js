class Dino {
  constructor() {
    this.position = { x: 0, y: 0 };
  }

  render(){
    ctx.fillRect(this.position.x, this.position.y, 50, 100)
  }

  update(){
    return
  }
}
