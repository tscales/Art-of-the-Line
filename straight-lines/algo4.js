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


context.lineWidth = 6;


palette = ["#4ECDC4","#F7FFF7", "#FF6B6B","#FFE66D"];

step = 48;
x = 0;
y = 0;


function algo4(x,y,width,height){
    //pick one of the two colors, draw a line across the canvas
    context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+width,y+height);
    context.stroke();
    context.closePath();
  }

function runalgo4(x,y){
  //choose a random color, and draw a random line at a random angle.
  for(var x = 599; x > 0; x -=step){
    algo4(x,y,Math.floor(Math.random()*600),Math.floor(Math.random()*600))
  }
  for(var y = 0; y < 600; y += step){
    algo4(x,y,Math.floor(Math.random()*600),Math.floor(Math.random()*600))
  }
}


function run(n){
  for (n = n; n > 0; n--){
    runalgo4(0,0);
  }
}

run(1);
