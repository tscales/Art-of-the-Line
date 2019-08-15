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
fillbackground("#0D1B2A");
context.lineWidth = 2;


palette = ["#D4AA7D","#778DA9","#E0E1DD"];
var step = 60;
var x = 0;
var y = 0;

for(y = 35; y < 600; y += step){
  context.strokeStyle = randomColor();
  for(x = -60; x < 600; x += step){
    context.beginPath();
    context.moveTo(x,y);
    context.bezierCurveTo(x + 100,y - 100,x + step,y + 80 ,x + 120,y);
    context.stroke();
    context.closePath();
  }
}
