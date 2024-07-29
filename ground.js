class Ground{
    constructor(){
        this.image1=new Image()
        this.image1.src='Images/rocktile1.4.png'
        this.image2=new Image()
        this.image2.src='Images/rocktile1.5.png'
        this.image3=new Image()
        this.image3.src='Images/rocktile1.6.png'
        this.y=0
        this.x=0
        this.idx=0

        this.groundImageChoices=[this.image1,this.image2,this.image3]
        this.groundImages=[]
        for(let i=0;i<450;i++){
            this.groundImages.push(this.groundImageChoices[getRandomArbitrary(0,2)])
        }

    }
    draw(ctx){
        this.idx=-1
        for(let i=0;i<15;i++){
            for(let j=0;j<30;j++){
                this.idx++
                ctx.drawImage(this.groundImages[this.idx],j*105,i*105,100,100)
            }
        }
    }
}