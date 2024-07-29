class Control{
    constructor(type){
        this.up=false
        this.down=false
        this.left=false
        this.right=false
        this.type=type
        if(type=='Player'){
            this.#addKeyListeners()
        }else{
            this.up=true
        }
    }
    #addKeyListeners(){
        document.onkeydown=(e)=>{
            switch(e.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.up=true;
                    break;
                case "ArrowDown":
                    this.down=true;
                    break;
            }
        }
        document.onkeyup=(e)=>{
            switch(e.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.up=false;
                    break;
                case "ArrowDown":
                    this.down=false;
                    break;
            }
        }
    }
    update(){
    }
}