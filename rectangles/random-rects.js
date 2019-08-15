var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var step = 10;
var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = 600;
canvas.height = 600;
//context.scale(dpr,dpr)

context.lineCap = "squared";
context.lineWidth = 1;

function fillbackground(color){
  context.fillStyle = color;
  context.fillRect(0,0,size, size);
}


var x = 0;
var y = 0;

function randomColor(){
  return palette[Math.floor(Math.random() * palette.length)];
}
fillbackground("#A1CCA5");
palette = ["#4E6E5D","#4DA167","3BC14A"];



function drawRects(){
  for( x = 600; x > -100; x -= step){
    context.strokeStyle = randomColor();
    context.strokeRect(x,Math.random() * 600,Math.random() * 300,Math.random() * 300);
  }
}

drawRects();
