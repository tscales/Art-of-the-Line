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

step = 1

context.lineWidth = step;


palette = ["#D8C99B","#FE938C", "#D8973C"];

for (var x = 0; x < 600; x += step){
  context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
  context.beginPath();
  context.moveTo(x,600);
  context.lineTo(x,Math.random() * 600);
  context.stroke();
  context.closePath();
}
