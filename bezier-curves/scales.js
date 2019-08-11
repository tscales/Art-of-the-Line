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
fillbackground("#A6C48A");

context.lineWidth = 2;


palette = ["#254D32"];
var step = 40;
var x = 0;
var y = 0;

function draw(x,y){
  context.strokeStyle = randomColor();
  context.beginPath();
  context.moveTo(x,y);
  context.quadraticCurveTo(x + 15, y + step + 25,x + (step + 10), y + 30);
  context.stroke();
  context.closePath();
}

for (x = 0; x < 600; x+= step){
  for(y = 0; y < 590; y+= step){
    draw(x,y);
  }
}
