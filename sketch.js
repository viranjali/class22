//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var ball;
function setup() {
  createCanvas(800,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options ={
    isStatic: true
  }
  ground = Bodies.rectangle(400,height,800,20,ground_options);
  World.add(myWorld, ground);

  var ball_options ={
    restitution: 0.8
  }

  ball = Bodies.circle(200,200,20,ball_options)
  World.add(myWorld,ball)
  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(myEngine);

  rectMode(CENTER);
 rect(ground.position.x, ground.position.y, 800,20);

 ellipseMode(CENTER);
 ellipse(ball.position.x,ball.position.y,20,20)
 // rect(400, 200, 50, 50);
}

