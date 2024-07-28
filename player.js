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
    }
    update(){
        this.controls.update()
        if(this.controls.left){
            this.sx-=this.acceleration
        }
        if(this.controls.right){
            this.sx+=this.acceleration
        }
        if(this.controls.up){
            this.sy+=this.acceleration
        }
        if(this.controls.down){
            this.sy-=this.acceleration
        }


        this.x+=this.sx
        this.y-=this.sy
        this.sx=0.95*this.sx
        this.sy=0.95*this.sy

        console.log(this.sx)


    }
    draw(ctx){
        ctx.save()
        ctx.rotate()
        ctx.beginPath()
        if (this.type=='Player') {
            ctx.roundRect(this.x, this.y, this.size,this.size,4)
        } else {
            ctx.arc(this.x, this.y, this.size, 0,Math.PI*2,false)  
        }
        ctx.fill()
    }
}