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
        this.bullets=[]
        this.shot=0
        this.id=this.myPlayer.id
        // this.realAngle
    }

    update(){
        this.bullets.forEach((bullet)=>{
            bullet.update(ctx)
        })
        if(entities){
            this.x=this.myPlayer.x
            this.y=this.myPlayer.y
        }
        if(spacePressed){
            if(this.shot<1){
                this.fire.push(new Explosion(this.x,this.y,this,'fire'))
                this.bullets.push(new Bullet(this.x, this.y, 30, 0, 10,this))
                this.shot=1
            }
        }else{
            this.shot=0
        }
        if(this.myPlayer.type=="Player"){
            this.dx=mouseX-this.x
            this.dy=mouseY-this.y
            this.distance=Math.hypot(this.dx,this.dy)
            this.angle=Math.atan2(mouseY-this.y,mouseX-this.x)
            if(this.angle>0.02){
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
        this.bullets.forEach((bullet)=>{
            bullet.draw(ctx)
        })
        ctx.save()
        ctx.translate(this.x,this.y)
        if (this.myPlayer.type=="Player") {
            ctx.rotate(this.angle)
        } else {
            ctx.rotate((Math.PI/2)-this.myPlayer.angle) 
        }
        // ctx.scale(this.flip,1)
        ctx.drawImage(this.img,0,0)
        ctx.restore()
    }
}