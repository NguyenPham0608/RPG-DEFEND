class Player{
    constructor(type,x,y){
        this.type=type
        this.controls=new Control(type)
        this.sx=0
        this.sy=0
        this.acceleration=0.5
        this.angle=Math.PI/2
        this.speed=0
        this.angleSpeed=0
        this.home=0
        this.attackedNumber=0
        this.id=getRandomArbitrary(0,1000000)
        if(type=="Enemy"){
            this.fillStyle='#FF0000'
            this.size=getRandomArbitraryDecimal(12,32)
            this.randomSpeed=(9.6/this.size)+getRandomArbitraryDecimal(0.05,0.1)
            this.x=x
            this.y=y
            this.dx=0
            this.dy=0
            this.distance=0
            this.radius=this.size
            // this.weapon=false
            

        }else{
            this.fillStyle='#00FF00'
            this.size=50
            this.attack=false
            this.x=canvas.width/2
            this.y=canvas.height/2
            this.radius=this.size/2
            this.weapon=new Weapon(this)


        }

        this.dead=false
        this.explosions=[]

    }
    update(){
        if(this.weapon){
            this.weapon.update()
        }

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
            this.dx=this.x-playerX
            this.dy=this.y-playerY
            this.distance=Math.hypot(this.dx,this.dy)
            
            if(this.attack){
                this.home=0
                this.#attackPlayer(this.size/12)
                if(this.distance>80){
                    this.attack=false
                }

            }else{
                if(this.distance>65){
                    this.speed-=this.randomSpeed
                }else{
                    this.speed=0
                    this.attackedNumber++
                    // this.explosions.push(new Explosion(playerX,playerY,this,'mushroom'))
                    this.attack=true
                }
                if(this.home<80){
                    this.angle=this.#homeAngle(this.dx, this.distance)
                }
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
            if(this.y<-70){
                removeThisFromArray(entities,this.id)
            }
            if(this.y>canvas.height){
                removeThisFromArray(entities,this.id)
            }
        }

        for(let i = 0; i<bulletsID.length;i++){
            if(Math.hypot(this.x-bulletsX[i],this.y-bulletsY[i])<this.size){
                if(this.type=="Enemy"){
                    this.explosions.push(new Explosion(this.x,this.y,this,'dead'))
                    this.dead=true
                }
            }
        }

    }

    #attackPlayer(damage){
        playerHealth-=damage
    }

    #homeAngle(dx,hypot){
        return(-Math.asin(dx/hypot))
    }

    draw(ctx){
        this.explosions.forEach((explosion)=>{
            explosion.draw(ctx,this.explosions)
        })
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(-this.angle)
        ctx.fillStyle=this.fillStyle
        ctx.beginPath()
        if(!this.dead){
            if (this.type=='Player') {
                ctx.roundRect(-this.size/2, -this.size/2, this.size,this.size,4)
            } else {
                ctx.arc(-this.size/2, -this.size/2, this.size, 0,Math.PI*2,false)  
            }
        }
        ctx.fill()
        ctx.lineWidth=4
        ctx.stroke()
        ctx.restore()

        if(this.weapon){
            this.weapon.draw(ctx)
        }
    }
}