class Bullet{
    constructor(x,y,speed, penetration, damage, data){
        this.x=x
        this.y=y
        this.penetration=penetration
        this.damage=damage
        this.speed=speed
        this.myPlayer=data
        this.id=this.myPlayer.id
        this.angle=this.myPlayer.angle

    }
    update(){
        this.x+=Math.sin(-this.angle+(Math.PI/2))*this.speed
        this.y+=Math.cos(-this.angle+(Math.PI/2))*this.speed
        bulletsX.push(this.x)
        bulletsY.push(this.y)
        bulletsID.push(this.id)
        for(let i=0;i<entitiesX.length;i++){
            if(Math.hypot(entitiesX[i]-this.x,entitiesY[i]-this.y)<60){
                removeThisFromArray(this.myPlayer.bullets,this.id)
                console.log(true)
            }
        }

    }
    draw(ctx){
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.beginPath()
        ctx.roundRect(20, 10, 10,4,1)
        ctx.fill()
        ctx.restore()
    }
}