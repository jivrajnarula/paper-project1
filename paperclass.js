class PaperClass{
    constructor(x,y,width,height){
     var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
     }
    this.body=Bodiescircle(200,390,options);
    World.add(world, this.body);

    display();
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width, this.height);
       }

    }
    

