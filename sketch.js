const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Render= Matter.Render;

var backGround, ball,ground;
var engine, world;
var backwall;


function preload(){
backGround= loadImage("Images/goal.jpg");
}

function setup() {
 var Canvas=createCanvas(800,400);
  
 engine= Engine.create();
  world= engine.world;

  ball = new Ball(400,350);
  goal=new Goal();
  ground= new Ground(400,410,800);
  console.log(ball)

}

function draw() {
  background(backGround); 
  Engine.update(engine);

  ball.display();
  ground.display();
  goal.display();
  
}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:200});
  }
}