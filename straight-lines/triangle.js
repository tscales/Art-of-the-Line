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

step = 5;
x = 0;
y = 0;


function DrawTriangle(x){
  //draw a triangle, starting from center, and moving along x axis
  context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
  context.beginPath();
  context.moveTo(300,300);
  context.lineTo(x,600);
  context.stroke();
  context.closePath();
}

function runDrawTriangle(){
  for (x = 0; x < 600; x += step){
    DrawTriangle(x);
    }
  }


runDrawTriangle();
