class Player{
    constructor(type){
        this.type=type
        this.x=canvas.width/2
        this.y=canvas.height/2
        this.controls=new Control(type)
        this.size=50
        this.sx=0
        this.sy=0
        this.acceleration=0.5
        this.angle=0
        this.speed=0
        this.angleSpeed=0
        if(type=="Enemy"){
            this.dx=0
            this.dy=0
            this.distance=0
        }
    }
    update(){
        
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
            playerX=this.x
            playerY=this.y
        }else{
            this.speed+=this.acceleration
            this.dx=this.x-playerX
            this.dy=this.y-playerY
            this.distance=Math.hypot(this.dx,this.dy)
        }


        this.x-=Math.sin(this.angle)*this.speed
        this.y-=Math.cos(this.angle)*this.speed 
        this.speed=0.95*this.speed
        this.angleSpeed=0.85*this.angleSpeed
        this.angle+=this.angleSpeed




    }
    draw(ctx){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.angle)

        ctx.beginPath()
        if (this.type=='Player') {
            ctx.roundRect(-this.size/2, -this.size/2, this.size,this.size,4)
        } else {
            ctx.arc(-this.size/2, -this.size/2, this.size, 0,Math.PI*2,false)  
        }
        ctx.fill()
        ctx.restore()
    }
}