//DrawRectangle.js
function main(){
//get canvas 
var canvas = document.getElementById('canvas');
if(!canvas){
  console.log('Failed to retrieve the <canvas> element');
  return;
}

//get the 2d context 
var ctx = canvas.getContext('2d');

//draw black canvas 
ctx.fillStyle = 'rgba(1.0, 0, 0, 1.0)';
ctx.fillRect(0,0,400,400);

const origin ={x: canvas.height/2, y: canvas.width/2, z: 0};
const obj = {0:origin.x+2.25*20,1:origin.y-2.25*20, 2:0}
const v1 = new Vector3(obj);
console.log(v1.elements);

//https://www.w3schools.com/tags/canvas_lineto.asp
function drawVector(v, color){
    ctx.strokeStyle = color;
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(v.elements[0],v.elements[1]);
    ctx.stroke();
}

drawVector(v1, "red");

}
