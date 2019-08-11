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
fillbackground("#495D63");


context.lineWidth = 1;


palette = ["#A6D49F","#9CB380","#629677","#70A37F"];

step = 5;
x = 0;
y = 0;

function randomFill(){
  context.strokeStyle = randomColor();
  context.beginPath();
  context.moveTo(Math.random() * 600, Math.random() * 600);
  context.lineTo(Math.random() * 600, Math.random() * 600);
  context.stroke();
  context.closePath();
}

function run(){
  for(x = 0; x <2000; x++){
    randomFill();
  }
}
run();
