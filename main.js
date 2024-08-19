/**@type{HTMLCanvasElement} */
const canvas=document.getElementById('canvas1')
const ctx=canvas.getContext('2d')

canvas.width=window.innerWidth
canvas.height=window.innerHeight
let playerX=0
let playerY=0
let ground=new Ground()
let gameFrame=0
let enemySpawnInterval=100
let playerHealth=5000
let enemySpawn=0
let entities=[]
let mouseX=0
let mouseY=0
let spacePressed=false
let bulletsX=[]
let bulletsY=[]
let bulletsID=[]
let crosshair=new Crosshair()
let shakeX=0
let shakeY=0
let entitiesX=[]
let entitiesY=[]

entities.push(new Player('Player',0,0))

function gameLoop(){
    bulletsX=[]
    bulletsY=[]
    bulletsID=[]
    entitiesX=[]
    entitiesY=[]

    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ground.draw(ctx)
    enemySpawn=gameFrame%enemySpawnInterval
    if(enemySpawn==enemySpawnInterval-1){
        entities.push(new Player('Enemy',getRandomArbitrary(0,canvas.width),-50))
    }

    entities.forEach((entity)=>{
        entity.update()
        entity.draw(ctx)
    })
    if(gameFrame%2==0){
        shakeX=shakeX*-shakeLength
        shakeY=shakeY*-shakeLength
    }

    gameFrame++
    crosshair.draw(ctx)
    // console.log(entitiesX.length)

    requestAnimationFrame(gameLoop)
}

window.addEventListener('mousemove',function(e){
    mouseX=e.clientX
    mouseY=e.clientY
})
window.addEventListener('keydown',function(e){
    if(e.key==" "){
        spacePressed=true
    }
})
window.addEventListener('keyup',function(e){
    if(e.key==" "){
        spacePressed=false
    }
})
window.addEventListener('click',function(){
    document.body.style.cursor = 'none';
})
gameLoop()