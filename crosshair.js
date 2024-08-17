class Crosshair{
    constructor(){
        this.img=new Image()
        this.img.src='Images/crosshare.png'
        this.angle=0
        this.lastMouseX=0
        this.lastMouseY=0
        this.mouseSpeed=0
    }
    draw(ctx){
        this.angle+=0.01
        ctx.save()
        ctx.translate(mouseX-3,mouseY-3)
        ctx.rotate(this.angle)
        ctx.drawImage(this.img,-75,-75)
        ctx.restore()

    }
}