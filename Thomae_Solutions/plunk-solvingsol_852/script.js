// Code goes here

var canvasWidth = 800;
var canvasHeight = 800;

p1 = {x: 0, y: 0};
c1 = {x: 800, y: 100};
c2 = {x: canvasWidth-800, y: canvasHeight-100};
p2 = {x: canvasWidth, y: canvasHeight}



function setup(){
  createCanvas(canvasWidth,canvasHeight);
  background(0,0,0);
  
  
  drawYellow();
  drawPurple();
  drawCurve();
  
  
}

function draw(){
  
  
 
  
  
}


function drawCurve(){
  push();
  stroke(0);
  noFill();
  strokeWeight(5.0);
  bezier(p1.x,p1.y, c1.x, c1.y, c2.x, c2.y, p2.x, p2.y);
  pop();  
}

function drawYellow(){
  for(i=0;i<=canvasHeight;i++){
    t = i/canvasHeight;
    nx = bezierPoint(p1.x, c1.x, c2.x, p2.x, t);
    ny = bezierPoint(p1.y, c1.y, c2.y, p2.y, t);
    push();
    stroke(255,255,0);
    strokeWeight(2.0);
    line(nx,ny,0,i);
    pop();
    
  }
  
  
}

function drawPurple(){
  for(i=0;i<=canvasHeight;i++){
    t = i/canvasHeight;
    nx = bezierPoint(p1.x, c1.x, c2.x, p2.x, t);
    ny = bezierPoint(p1.y, c1.y, c2.y, p2.y, t);
    push();
    stroke(150,0,255);
    strokeWeight(2.0);
    line(nx,ny,canvasWidth,i);
    pop();
    
  }
  
  
}