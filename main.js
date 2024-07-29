/**@type{HTMLCanvasElement} */
const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')
let player=new Player('Player')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let playerX=0
let playerY=0
let ground=new Ground()
let gameFrame=0
let enemySpawnInterval=1000
let enemySpawn=0
let enemies=[]

function gameLoop(){
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ground.draw(ctx)
    player.update()
    player.draw(ctx)
    enemySpawn=gameFrame%enemySpawnInterval
    if(enemySpawn=enemySpawnInterval-1){
        enemies.push(new Player('Enemy'))
    }
    gameFrame++
    console.log(enemySpawn)
    requestAnimationFrame(gameLoop)
}

gameLoop()