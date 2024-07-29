class Explosion{
    constructor(x,y){
        this.x=x
        this.y=y
        this.frame=0
        this.frameX=0
        this.frameY=0
        this.frameYChange=0
        this.spriteWidth=(1207/8)
        this.spriteHeight=(605/4)
        this.img=new Image()
        this.img.src='https://static.packt-cdn.com/products/9781785883910/graphics/4bfc14e9-f288-4e14-85bb-f46f71cf5192.png'
    }
    draw(ctx,arrayFrom){
        ctx.drawImage(this.img,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x,this.y,this.spriteWidth,this.spriteHeight)
        this.frameX++
        if(this.frameX>7){
            this.frameYChange++
            this.frameX=0
        }
        this.frameY=this.frameYChange%4
        this.frame++
        console.log(this.frameX)
    }
}