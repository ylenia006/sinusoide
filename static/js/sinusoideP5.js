let ampiezza = 100
let frequenza = 2
let fase = 0
let angle = 0 
let increment = 0.01

function setup() 
{
  createCanvas(400, 400);
  background(220);
  line(0,200,1000,200)
  frameRate(400)
  
}

function draw() 
{
  let x = map(angle,0,2*PI,0,400)

  let y = ampiezza*sin(2*PI*frequenza*angle+fase)
  let y1 = ampiezza*cos(2*PI*frequenza*angle+fase)

  stroke(225,0,225)
  strokeWeight(3)
  point(x,y+200)

  stroke(0,255,0)
  strokeWeight(3)
  point(x,y1+200)

  angle += increment

  if( x >= 400)
  {
    background(220)
    strokeWeight(1)
    stroke(0)
    line(0,200,400,200)
    angle = 0
  }
}

