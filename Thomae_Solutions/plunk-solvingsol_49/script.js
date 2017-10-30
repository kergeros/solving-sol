// Code goes here

var canvasHeight = 800;
var canvasWidth = 800;
var section = canvasHeight/15;

function setup(){
  createCanvas(canvasWidth,canvasHeight);
  background(250);
  push();
  fill(200);
  rect(0,0,canvasWidth-1,canvasHeight-1);
  pop();
  

  push();
  drawVertical();
  translate(0,section);
  drawHorizontal();
  translate(0,section);
  drawDiag1();
  translate(0,section);
  drawDiag2();
  translate(0,section);
  drawVertical();
  drawHorizontal();
  translate(0,section);
  drawVertical();
  drawDiag1();
  translate(0,section);
  drawVertical();
  drawDiag2();
  translate(0,section);
  drawHorizontal();
  drawDiag1();
  translate(0,section);
  drawHorizontal();
  drawDiag2();
  translate(0,section);
  drawDiag1();
  drawDiag2();
  translate(0,section);
  drawVertical();
  drawHorizontal();
  drawDiag1();
  translate(0,section);
  drawVertical();
  drawHorizontal();
  drawDiag2();
  translate(0,section);
  drawHorizontal();
  drawDiag1();
  drawDiag2();
  translate(0,section);
  drawVertical();
  drawDiag1();
  drawDiag2();
  translate(0,section);
  drawVertical();
  drawHorizontal();
  drawDiag1();
  drawDiag2();
  pop();
  //set up divisions
  for(i=0;i<15;i++){
    push();
    strokeWeight(3);
    line(0,i*section,canvasWidth,i*section);
    pop();
  }
  //redaw border
  push();
  noFill();
  strokeWeight(2);
  rect(1,1,canvasWidth-2,canvasHeight-2);
  pop();
  
}

function draw(){
}

function drawDiag2(){
  line_c= color(80,100);
  line_n= 60;
  var separation = Math.floor(canvasWidth/line_n);
  for(i=1;i<=line_n+10;i++){
    push();
    stroke(line_c);
    strokeWeight(4);
    line(i*separation,0,i*separation-50,section);
    pop();
  }
}

function drawDiag1(){ 
  line_c= color(250,250,0,100);
  line_n= 60;
  var separation = Math.floor(canvasWidth/line_n);
  for(i=1;i<=line_n+10;i++){
    push();
    stroke(line_c);
    strokeWeight(4);
    line(i*separation-50,0,i*separation,section);
    pop();
  }
}

function drawHorizontal(){
  line_c= color(0,0,250,100);
  line_n= 6;
  var separation = Math.floor(section/line_n);
  for(i=1;i<=line_n;i++){
    push();
    stroke(line_c);
    strokeWeight(4);
    line(0,i*separation,canvasWidth,i*separation);
    pop();
  }
}

function drawVertical(){
  line_c= color(250,0,0,100);
  line_n= 80;
  var separation = Math.floor(canvasWidth/line_n);
  for(i=1;i<=line_n;i++){
    push();
    stroke(line_c);
    strokeWeight(4);
    line(i*separation,0,i*separation,section);
    pop();
  }
}