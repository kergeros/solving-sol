// Code goes here

function setup(){
  createCanvas(800,800);
  background(0);
  clusterx=400;
  clustery=400;
  maxOffset=150;
  maxSize=200;
  
  fill(0);
  noFill();
  stroke(250);
  strokeWeight(3);
  
  var offsetArrayX=new Array(6);
  for(i=0;i<offsetArrayX.length;i++){
    offsetArrayX[i]=getRandomInt(-maxOffset,maxOffset);
    
  }
  
  var offsetArrayY=new Array(6);
  for(i=0;i<offsetArrayY.length;i++){
    offsetArrayY[i]=getRandomInt(-maxOffset,maxOffset);
    
  }
  
  var shapeArray=new Array(6);
  for(i=0;i<shapeArray.length;i++){
    shapeArray[i]=getRandomInt(1,4);
    
  }
  
    var rotArray=new Array(6);
  for(i=0;i<rotArray.length;i++){
    rotArray[i]=getRandomInt(0,TWO_PI);
    
  }
  
  var sizeArray=new Array(6);
  for(i=0;i<sizeArray.length;i++){
    sizeArray[i]=getRandomInt(50,maxSize);
    
  }
   
  for(i=0;i<shapeArray.length;i++){
    push();
    translate(clusterx+offsetArrayX[i],clustery+offsetArrayY[i]);
    rotate(rotArray[i]);
    switch (shapeArray[i]){
    case 1: rect(-sizeArray[i]/2,-sizeArray[i]/2,sizeArray[i],sizeArray[i]);break;
    case 2: triangle(-sizeArray[i]/2,-sizeArray[i]/2,+sizeArray[i]/2,-sizeArray[i]/2,0,sizeArray[i]/2);break;
    case 3: ellipse(0,0,sizeArray[i]);break;
    }
    
    pop();
  }
  

  
  
}

function draw(){
  
  
  
  
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}