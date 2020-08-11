
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy;
function preload()
{
	boy = loadImage("./Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	tree = new Tree(400,200,800,20);
    stone = new Stone(150,580,70,70);
   	mango1 = new Mango(600,450,50,50);
   	mango2 = new Mango(500,450,50,50);
    mango3 = new Mango(750,450,50,50);
    mango4 = new Mango(650,350,50,50);
    mango5 = new Mango(550,350,50,50);
   // boy = new Boy(200,580,200,300);
    launcher = new Launcher(stone.body,{x:150,y:510});

	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);
  image(boy,110,440,200,300)
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
 // boy.display();
  drawSprites();
 keyPressed();
 detectCollision();
}

function mouseReleased(){
launcher.fly();
}

function mouseDragged(){
Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function keyPressed(){
  if(keyCode == 32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    launcher.attach(stone.body);
  }
}

function detectCollision(stone,mango){
 var mangoBodyPosition = mango.body.position
 var stoneBodyPosition = stone.body.position
var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
Matter.Body.setStatic(mango.body,false);
}
}

