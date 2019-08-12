var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

function fillbackground(color){
  context.fillStyle = color;
  context.fillRect(0,0,600, 600);
}
function randomColor(){
  return palette[Math.floor(Math.random() * palette.length)];
}
fillbackground("#605770");

context.lineWidth = 2;


palette = ["#EDCB96"];
var step = 20;
var x = 0;
var y = 0;

for(x = 10; x < 600; x += step){
  context.strokeStyle = randomColor();
  context.beginPath();
  context.moveTo(x,0);
  context.bezierCurveTo(200,400,400,0,x,600);
  context.stroke();
  context.closePath();
}
