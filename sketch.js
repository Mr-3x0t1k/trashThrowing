
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine;
var world;
var dustbin1, ground1, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
    engine = Engine.create();
    world = engine.world;

    dustbin1 = new Dustbin(800,500);
    ground1 = new Ground(width/2,570,width,20);
    paper = new Paper(100,450,40);


	//Create the Bodies Here.
    var render = Render.create({
    element : document.body,
    engine : engine,
    options : {
    width : 600,
    height :600,
    wireframes : false
    }
    });

	Engine.run(engine);
  
}


function draw() {

  background(0);
  ground1.display();
  dustbin1.display();
  paper.display();
  KeyPressed();
}

function KeyPressed()
{
if (keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-5});

}
}

