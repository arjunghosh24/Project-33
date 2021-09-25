var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  Body = Matter.Body;
 
var particles = [];
var bgIMG;
var sway = 0.1;
var IMG = 1;


function preload()
{
  bgIMG = loadImage("snow1.jpg");
}

function setup() 
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  particles.push(new Particles(400, -10));
}
 
function draw() 
{
  background(bgIMG);
  textSize(20)
  text("Press space to change location", 250, 20);
 
  Engine.update(engine);

  if(frameCount % 120 == 0)
  {
    particles.push(new Particles(random(0, 700), -10));
  }

  for(var i = 0; i < particles.length; i++)
  {
    particles[i].display();
    particles[i].body.position.x = particles[i].body.position.x + sway + random(-0.12, 0.12);    
  }
}

function keyPressed()
{
  if(keyCode == 32)
  {
    IMG++;
    if(IMG == 1)
    {
      bgIMG = loadImage("snow1.jpg");
    }
    else if(IMG == 2)
    {
      bgIMG = loadImage("snow2.jpg");
    }
    else
    {
      bgIMG = loadImage("snow3.jpg");
    }
    
    if(IMG == 3)
    {
      IMG = 0;
    }  
  }
}