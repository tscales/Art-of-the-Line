var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

var rstep = 10;
var size = window.innerWidth;
var dpr = window.devicePixelRatio;

//context.scale(dpr,dpr)
function fillbackground(color){
  context.fillStyle = color;
  context.fillRect(0,0,size, size);
}
function randomColor(){
  return palette[Math.floor(Math.random() * palette.length)];
}
fillbackground("#272727");
//fillbackground("#CCE6F4")

context.lineWidth = 1;


palette = ["#94A89A","#A3B18A","#F8F4E3"];
var step = 10;
var x = 0;
var y = 0;

function arcs(x){

  context.strokeStyle = randomColor()
  context.beginPath();
  context.moveTo(0,600);
  context.quadraticCurveTo(x,-575,600,600);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.moveTo(0,0);
  context.quadraticCurveTo(x,1175,600,0);
  context.stroke();
  context.closePath();

}

function run(){
  for (x = 0; x < 600; x += step){
    arcs(x, -575)
  }
}


run();
