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
fillbackground("#292F36");


context.lineWidth = 12;


palette = ["#4ECDC4","#F7FFF7", "#FF6B6B","#FFE66D"];

step = 32;
x = 0;
function draw(){
  for(y = 12; y < 600; y+= step){
    startFromLeft = Math.random() > 0.5;

    if(startFromLeft){
      context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
      context.beginPath();
      context.moveTo(x,y);
      context.lineTo(Math.floor(Math.random() * 600), y);
      context.stroke();
      context.closePath();
    } else {
        context.strokeStyle = palette[Math.floor(Math.random() * palette.length)];
        context.beginPath();
        context.moveTo(600,y)
        context.lineTo(Math.floor(Math.random() * 600),y);
        context.stroke();
        context.closePath();
    }
  }
}

function run(n){
  for (n = n; n > 0; n--){
    draw();
  }
}

run(2);
