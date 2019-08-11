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
//fillbackground("#CCE6F4")


context.lineWidth = 1;


palette = ["#D8C99B","#FE938C", "#D8973C"];

step = 32;
for (var y = 0; y < 600; y += step){
context.lineWidth = Math.random() * 32;
context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
context.beginPath();
context.moveTo(0,y);
context.lineTo(600,y);
context.stroke();
context.closePath();
}
