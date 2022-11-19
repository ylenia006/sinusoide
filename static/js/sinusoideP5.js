let ampiezza = 100
let frequenza = 2
let fase = 0 
let angle = 0 
let increment = 0.01

function setup() 
{
  createCanvas(1000, 400);
  background(220);
  line(0,200,1000,200)
   frameRate(400)
  
}

function draw() 
{
  let x = map(angle,0,2*PI,0,400)
  let y = ampiezza*sin(2*PI*frequenza*angle+fase)
  stroke(0,0,255)
  strokeWeight(3)
  console.log(x,y)
  point(x,y+200)
  angle += increment
}

