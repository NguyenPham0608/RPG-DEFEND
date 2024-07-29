class Player{
    constructor(type){
        this.type=type
        this.controls=new Control(type)
        this.sx=0
        this.sy=0
        this.acceleration=0.5
        this.angle=0
        this.speed=0
        this.angleSpeed=0
        this.home=0
        this.id=getRandomArbitrary(0,1000000)
        if(type=="Enemy"){
            this.fillStyle='#FF0000'
            this.size=25

            this.x=getRandomArbitrary(0,canvas.width)
            this.y=0
            this.dx=0
            this.dy=0
            this.distance=0
        }else{
            this.fillStyle='#00FF00'
            this.size=50

            this.x=canvas.width/2
            this.y=canvas.height/2
        }
    }
    update(){
        this.home++
        
        if(this.type=="Player"){

            if(this.controls.left){
                this.angleSpeed+=0.01
            }
            if(this.controls.right){
                this.angleSpeed-=0.01
            }
            if(this.controls.up){
                this.speed+=this.acceleration
            }
            if(this.controls.down){
                this.speed-=this.acceleration
            }
            this.angle+=this.angleSpeed
            playerX=this.x
            playerY=this.y
        }else{

            this.speed-=0.5


            this.dx=this.x-playerX
            this.dy=this.y-playerY
            this.distance=Math.hypot(this.dx,this.dy)
            if(this.home<80){
                this.angle=-Math.asin(this.dx/this.distance)
            }
        }


        this.x-=Math.sin(this.angle)*this.speed
        this.y-=Math.cos(this.angle)*this.speed 
        this.speed=0.95*this.speed
        this.angleSpeed=0.85*this.angleSpeed

        if(this.type=="Enemy"){   
            if(this.x<0){
                removeThisFromArray(entities,this.id)
            }
            if(this.x>canvas.width){
                removeThisFromArray(entities,this.id)
            }
            if(this.y<0){
                removeThisFromArray(entities,this.id)
            }
            if(this.y>canvas.height){
                removeThisFromArray(entities,this.id)
            }
        }


    }
    draw(ctx){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.angle)
        ctx.fillStyle=this.fillStyle
        ctx.beginPath()
        if (this.type=='Player') {
            ctx.roundRect(-this.size/2, -this.size/2, this.size,this.size,4)
        } else {
            ctx.arc(-this.size/2, -this.size/2, this.size, 0,Math.PI*2,false)  
        }
        ctx.fill()
        ctx.stroke()
        ctx.restore()
    }
}