class Goal{
    constructor(){
        var options= {
            isStatic:true
        }
        this.image=loadImage("Images/goal.jpg")
        this.body= Bodies.rectangle(400,200,300,100,options);
        this.width=300;
        this.height=100;
        World.add(world,this.body);
    }

    display(){
        imageMode (CENTER)
        image (this.image, this.body.position.x,this.body.position.y, this.width,this.height);
        
        
        
    }


}