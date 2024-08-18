let shakeLength=0
let shakePower=0

class Shake{
    constructor(shakeLengthParam,shakePowerParam){
        shakeLength=shakeLengthParam
        shakePower=shakePowerParam

        for(let i=0;i<100;i++){
            
            shakeY=getRandomArbitrary(-180,180)
            shakeX=shakePower*sin((shakeY*Math.PI)/180)
            shakeY=shakePower*cos((shakeY*Math.PI)/180)
        }
    }
}