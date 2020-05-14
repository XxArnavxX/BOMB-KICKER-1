class Front{
    
    constructor(){
        this.button = createButton('Start Game');
    }

    display(){
        this.button.position(displayWidth / 2, displayHeight - 200);
        this.button.mousePressed(()=>{
            this.button.hide();
            enter = 1;

        })
    }
}