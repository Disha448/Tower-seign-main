  
class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true

       
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.ground = Bodies.rectangle(450,550,1500,20,options)
    World.add(world, this.ground)
    
  }
  display(){
    var pos =this.body.position;
    nonstroke()
    fill("brown");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
};