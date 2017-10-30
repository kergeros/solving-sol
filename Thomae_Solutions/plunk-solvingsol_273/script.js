// Code goes here

var cellsize = 80;
var canvasWidth = 800;
var canvasHeight = 800;

var cn = Math.floor(canvasWidth/cellsize);
var rn = Math.floor(canvasHeight/cellsize);

var pointMatrix =new Array(rn);

var pointChance = 0.9;

function setup(){
  createCanvas(canvasWidth,canvasHeight);
  background(0,0,0);
  
  //making 2d array
  for(i=0;i<rn;i++){
    pointMatrix[i] = new Array(cn);
    
  }
  
  //initializing array
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      
      pointMatrix[i][u]=Math.random();
      
    }
    
  }  
  
  
  createGrid();
  drawBlueLines();
  drawRedLines();
  
  drawYellowLines();
  drawPoints();

}


function draw(){
  

  
  
  
  
}
function drawRedLines(){
   push();
        stroke(255,0,0);
        strokeWeight(10.0);
        strokeCap(ROUND);
  //from top
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(canvasWidth/2,0,cellsize*i,cellsize*u);
      }
    }
  }
  //from bottom
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(canvasWidth/2,canvasHeight,cellsize*i,cellsize*u);
      }
    }
  }
  //from left
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(0,canvasHeight/2,cellsize*i,cellsize*u);
      }
    }
  }  
  //from Right
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(canvasWidth,canvasHeight/2,cellsize*i,cellsize*u);
      }
    }
  }  
 pop(); 
}

function drawBlueLines(){
  push();
  strokeWeight(15.0);
  strokeCap(ROUND);
  stroke(0,0,255);
  //from top-left
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(0,0,cellsize*i,cellsize*u);
      }
    }
  }
  //from top-right
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(canvasWidth,0,cellsize*i,cellsize*u);
      }
    }
  }
  //from bottom-left
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(0,canvasHeight,cellsize*i,cellsize*u);
      }
    }
  }  
  //from bottom-Right
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      if (pointMatrix[i][u]>pointChance){
        line(canvasWidth,canvasHeight,cellsize*i,cellsize*u);
      }
    }
  }  
  pop();
}

function drawYellowLines(){
  push();
  strokeWeight(5.0);
  strokeCap(ROUND);
  stroke(255,255,0);
  //from center
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      
      if (pointMatrix[i][u]>pointChance){
        
        line(canvasWidth/2,canvasHeight/2,cellsize*i,cellsize*u);
      }
    }
  }
pop();
  
}

function drawPoints(){
  //show points
  for(i=1;i<rn;i++){
    for(u=1;u<cn;u++){
      
      if (pointMatrix[i][u]>pointChance){
        push();
        stroke(0);
        fill(250);
        ellipse(cellsize*i,cellsize*u,15);
        pop();
        
      }
      
    }
    
  }  
  
  
}

function createVertical(){
  
  for(i=1;i<=cn;i++){
    push();
    stroke(100,100,100);
    translate(cellsize*i,0);
    line(0,0,0,canvasHeight);
    pop();
  }
}

function createHorizontal(){
  
  for(i=1;i<=rn;i++){
    push();
    stroke(100,100,100);
    translate(0,cellsize*i);
    line(0,0,canvasWidth,0);
    pop();
  }
}

function createGrid(){
  
  createVertical();
  createHorizontal();
  
}