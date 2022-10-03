class Dino {
  constructor() {
    this.position = { x: 10, y: 20 };
  }

  render(){
    ctx.fillRect(this.position.x, this.position.y, 50, 100)
  }

  update(){
    return
  }

  jump(){
    console.log("Jump!")
  }
}
