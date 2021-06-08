const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;
var poly, ground, stand1, stand2, polygon;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

var chain;

function preload(){
  
  hexagon_image = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    stand1 = new Stand(490,350,250,10);
    stand2 = new Stand(800,200,200,10);



  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3 = new Ground(750, 600, 1500, 10)


  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  blocks1 = new  Block(740,175,30,40);
  blocks2 = new  Block(770,175,30,40);
  blocks3 = new  Block(800,175,30,40);
  blocks4 = new  Block(830,175,30,40);
  blocks5 = new  Block(860,175,30,40);
  blocks6 = new  Block(770,135,30,40);
  blocks7 = new  Block(800,135,30,40);
  blocks8 = new  Block(830,135,30,40);
  blocks9 = new  Block(800,95,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

    poly = Bodies.circle(50,200,20 ,{density:2});
  World.add(world, poly);

 sling = new Chain(this.ball,{x:150, y:160});
 slingShot = new Slingshot(this.poly, {x:150, y:400})

 chain = new Chain(hexagon_image,{x:150,y:200})

 

 





}

function draw() {
  background(0);
  Engine.update(engine);

  //fill(rgb(135, 205, 236));
  textSize(20);
  fill("red");
  text("Try to fall all in just one hit !! and press space to get a chance",100,30);

  ground1.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  strokeWeight(0);
  stroke(0);

 

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();

  chain.display();
 

  fill("skyblue");
  block1.display();
  fill("pink");
  block2.display();
  fill("skyblue");
  block3.display();
  fill("pink");
  block4.display();
  fill("skyblue");
  block5.display();
  fill("pink");
  block6.display();
  fill("skyblue");
  block7.display();
  // stage 2
  fill("yellow");
  block8.display();
  fill("white");
  block9.display();
  fill("yellow");
  block10.display();
  fill("white");
  block11.display();
  fill("yellow");
  block12.display();
  // stage 3
  fill("blue");
  block13.display();
  fill("red");
  block14.display();
  fill("blue");
  block15.display();
  // stage 4
  fill("magenta");
  block16.display();

   // stand2 
  // stage 1
  fill("cyan");
  blocks1.display();
  fill("gold");
  blocks2.display();
  fill("cyan")
  blocks3.display();
  fill("gold")
  blocks4.display();
  fill("cyan")
  blocks5.display();
  // stage2
  fill("peach");
  blocks6.display();
  fill("coral")
  blocks7.display();
  fill("peach")
  blocks8.display();

  fill("pink")
  blocks9.display();

  imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,40,40);

  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}