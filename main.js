/**@type{HTMLCanvasElement} */
const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')
let player=new Player('Player')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

function gameLoop(){
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    player.update()
    player.draw(ctx)
    requestAnimationFrame(gameLoop)
}

gameLoop()