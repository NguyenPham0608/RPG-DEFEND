class Weapon{
    constructor(myPlayer){
        this.index=0
        this.myPlayer=0
        this.img=new Image()
        this.img.src='Images/gun1.png'
        this.myPlayer=myPlayer
        this.x=this.myPlayer.x
        this.y=this.myPlayer.y
        this.dx=0
        this.dy=0
        this.distance=0
        this.angle=0
        this.flip=1
        this.fire=[]
        this.shot=0
    }

    update(){
        if(entities){
            this.x=this.myPlayer.x
            this.y=this.myPlayer.y
        }
        if(spacePressed){
            if(this.shot<1){
                this.fire.push(new Explosion(this.x,this.y,this,'fire'))
                this.shot=1
            }
        }else{
            this.shot=0
        }
        this.#getAngleToMouse()
    }
    #getAngleToMouse(){
        if(this.myPlayer.type=='Enemy'){

        }else{
            this.dx=mouseX-this.x
            this.dy=mouseY-this.y
            this.distance=Math.hypot(this.dx,this.dy)
            this.angle=Math.asin(this.dx/this.distance)
            if(this.angle<-0.02){
                this.flip=-1
            }else{
                this.flip=1
            }
        }
    }

    draw(ctx){
        this.fire.forEach((fire)=>{
            fire.draw(ctx,this.fire)
        })
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle-this.myPlayer.angle+(Math.PI/2))
        ctx.scale(this.flip,1)
        ctx.drawImage(this.img,0,0,)
        ctx.restore()
    }
}