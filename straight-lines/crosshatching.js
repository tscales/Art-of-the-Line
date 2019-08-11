var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var height = 600;
var width = 600;
canvas.width = width;
canvas.height = height;

function fillbackground(color){
  context.fillStyle = color;
  context.fillRect(0,0,600, 600);
}
function randomColor(){
  return palette[Math.floor(Math.random() * palette.length)];
}
fillbackground("#292F36");


context.lineWidth = 1;


palette = ["#4ECDC4","#F7FFF7", "#FF6B6B","#FFE66D"];

step = 1;
x = 0;
y = 0;


function crosshatch(x,y,width,height){
  //cross hatching...
  startLeft = Math.random() > 0.5;
  if(startLeft){
    context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(Math.floor(Math.random() * width), y);
    context.stroke();
    context.closePath();
  } else{
    context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
    context.beginPath();
    context.moveTo(x,y)
    context.lineTo(x,Math.floor(Math.random() * height));
    context.stroke();
    context.closePath();
  }
}

function runCrosshatch(x,y){
  //crosshatching
  for(var x = 600; x > 2; x -=step){
    crosshatch(x,y,Math.random()*width, Math.random()*height);
    crosshatch(x,y,Math.random()*width,Math.random()*height);
  }
  for(var y = 4; y < 600; y += step){
    crosshatch(x,y,Math.random()*width,Math.random()*height);
    crosshatch(x,y,Math.random()*width,Math.random()*height);
  }
}

runCrosshatch(0,0);
