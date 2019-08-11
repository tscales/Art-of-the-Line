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
fillbackground("#273E47");

context.lineWidth = 1;


palette = ["#FFFFEA","#00CECB", "#FFED66"];
var step = 20;
var x = 0;
var y = 0;

function draw(x,y){
  context.strokeStyle = randomColor();
  context.beginPath();
  context.moveTo(x,y);
  context.quadraticCurveTo(x + (step / 2), y + (step / 2),x + step, y);
  context.stroke();
  context.closePath();
}

for (x = 10; x < 590; x+= step){
  for(y = 10; y < 600; y+= step){
    draw(x,y);
  }
}
