var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

//context.scale(dpr,dpr)
function fillbackground(color){
  context.fillStyle = color;
  context.fillRect(0,0,size, size);
}
function randomColor(){
  return palette[Math.floor(Math.random() * palette.length)];
}
fillbackground("#273E47");
//fillbackground("#CCE6F4")

context.lineWidth = 1;


palette = ["#D8C99B","#FE938C", "#D8973C"];
var step = 20;
var x = 0;
var y = 0;

function createArcSet1(x){

  context.strokeStyle = randomColor();

  context.beginPath();
  context.moveTo(300,300);
  context.quadraticCurveTo(x + Math.random() * 300,Math.random() * 600,Math.random() * 40, Math.random() * 40);
  context.stroke();
  context.closePath();

}


function drawArcs(){
  for (var y = 0; y < 600; y += step){
    createArcSet1(y);
  }
}
drawArcs();
