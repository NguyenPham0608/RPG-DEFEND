class Explosion{
    constructor(x,y,myWeaponData,type="mushroom"){
        this.id=getRandomArbitrary(0,1000000)
        this.type=type
        this.frame=0
        this.frameX=0
        this.frameY=0
        this.frameYChange=0
        this.spriteWidth=(1207/8)
        this.spriteHeight=(605/4)
        this.img=new Image()
        if (type=="mushroom"||type=='dead') {
            this.img.src='https://static.packt-cdn.com/products/9781785883910/graphics/4bfc14e9-f288-4e14-85bb-f46f71cf5192.png' 
            this.x=x-this.spriteWidth/2
            this.y=y-this.spriteHeight/2
        } else {
            this.img.src='Images/fire.png'  
            this.x=x
            this.y=y
        }
        this.weaponData=myWeaponData
        this.scaleDown=0
    }
    draw(ctx,arrayFrom){
        this.scaleDown++
        if (this.type=='mushroom'||this.type=='dead') {
            ctx.drawImage(this.img,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x,this.y,this.spriteWidth,this.spriteHeight)
            this.frameX++
            if(this.frameX>7){
                this.frameYChange++
                if(this.frameY>2){
                    if(this.type=="dead"){
                        removeThisFromArray(entities,this.weaponData.id)
                    }
                    removeThisFromArray(arrayFrom,this.id)
                }
                this.frameX=0
            }
            this.frameY=this.frameYChange%4
        } else {
            ctx.save()
            ctx.translate(this.x,this.y)
            ctx.rotate(this.weaponData.angle)
            // ctx.scale(this.weaponData.flip,1)
            ctx.drawImage(this.img,79-(this.scaleDown),5,79-(this.scaleDown),27-(this.scaleDown*2.72))
            ctx.restore()
            if(this.frame>5){
                removeThisFromArray(arrayFrom,this.id)
            }
        }
        this.frame++
    }
}