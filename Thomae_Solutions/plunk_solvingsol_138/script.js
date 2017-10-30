var padding=20;
var weight=3;
var n=Math.floor(800/(weight+padding));
var shapeArray=new Array(n);




function setup(){

  createCanvas(800,800);
  background(0);
  noFill();
  stroke(250);
  strokeWeight(weight);
  
  drawCircles(400,0);
  drawCircles(400,800);
  drawCircles(0,400);
  drawCircles(800,400);
  
}


function draw(){
  
}


function drawCircles(loc_x,loc_y){
  for(i=0;i<shapeArray.length;i++){
  shapeArray[i]=getRandomInt(0,3);
    
  }
  push();
  translate(loc_x,loc_y);
  for(i=0;i<shapeArray.length;i++){
  if(shapeArray[i]==0){}
  else {
    if(shapeArray[i]==1){
      ellipse(0,0,(weight+padding)*i)
      
    }
    else{
      if(shapeArray[i]==2){
         arc(0,0,(weight+padding)*i,(weight+padding)*i,Math.random(),Math.random()*TWO_PI)
      }
    }
    
  }
    
  }
  pop();
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}