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

}
const origin ={x: canvas.height/2, y: canvas.width/2, z: 0};
var ctx = canvas.getContext('2d');

//https://www.w3schools.com/tags/canvas_lineto.asp
function drawVector(v, color){
    const scalar = 20;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(origin.x+v.elements[0]*scalar,origin.y-v.elements[1]*scalar);
    ctx.stroke();
}
function drawCanvas(ctx){
    ctx.fillStyle = 'rgba(1.0, 0, 0, 1.0)';
    ctx.fillRect(0,0,400,400);
}
//https://stackoverflow.com/questions/7789521/how-to-link-external-javascript-file-onclick-of-button
var drawButton = document.getElementById("draw");
drawButton.onclick = function handleDrawEvent(){
    ctx.fillStyle = 'rgba(1.0, 0, 0, 1.0)';
    ctx.fillRect(0,0,400,400);
    //get coordinates
    var v1_x = document.getElementById("v1-x").value;
    var v1_y = document.getElementById("v1-y").value;
    const v1_obj = {0:v1_x,1:v1_y, 2:0}
    const v1 = new Vector3(v1_obj);
    var v2_x = document.getElementById("v2-x").value;
    var v2_y = document.getElementById("v2-y").value;
    const v2_obj = {0:v2_x,1:v2_y, 2:0}
    const v2 = new Vector3(v2_obj);
    //draw vector
    drawVector(v1, "red");
    drawVector(v2,"blue");
}

function updateOps(){
    var e = document.getElementById("ops");
    var operation = e.options[e.selectedIndex].text;
    return operation;
}
function AngleBetween(vec1, vec2){
    //get the dot product first
    var dotProduct = Vector3.dot(vec1, vec2);
    //the product of both magnitude
    var magnitudeProduct = vec1.magnitude() * vec2.magnitude();
    var cosTheta = dotProduct/magnitudeProduct;
    return Math.acos(cosTheta)/Math.PI * 180;
}
var drawButton2 = document.getElementById("secondDraw");

drawButton2.onclick= function handleSecondDrawEvent(){
    var scalar = document.getElementById("scalar").value;
    var v1_x = document.getElementById("v1-x").value;
    var v1_y = document.getElementById("v1-y").value;
    const v1_obj = {0:v1_x,1:v1_y, 2:0}
    var v1 = new Vector3(v1_obj);
    var v2_x = document.getElementById("v2-x").value;
    var v2_y = document.getElementById("v2-y").value;
    const v2_obj = {0:v2_x,1:v2_y, 2:0}
    var v2 = new Vector3(v2_obj);
    var operation = updateOps();
    console.log(operation);
      switch(operation){
        case "Add":
           var v3 = v1.add(v2);
           drawVector(v3,"green");
            break;
        case "Sub":
            var v3 = v1.sub(v2);
            drawVector(v3,"green");
            break;
        case "Div":
            console.log(scalar);
            var v3 = v1.div(scalar);
            var v4 = v2.div(scalar);
            drawVector(v3,"green");
            drawVector(v4,"green");
            break;
        case "Mul":
            console.log(scalar);
            var v3 = v1.mul(scalar);
            var v4 = v2.mul(scalar);
            drawVector(v3,"green");
            drawVector(v4,"green");
            break;
        case "Magnitude":
            console.log("v1 Magnitude :" + v1.magnitude());
            console.log("v2 Magnitude :" + v2.magnitude());
            break;
        case "Normalize":
            var v3 = v1.normalize();
            var v4 = v2.normalize();
            drawVector(v3,"green");
            drawVector(v4,"green");           
            break;
        case "Angle Between":
            var angle = AngleBetween(v1,v2);
            console.log("Angle between is : " + angle);
            break;
        case "Area":
            var v3 = Vector3.cross(v1,v2);
            console.log(v3);
            console.log("Area of triangle is : " + v3.magnitude()/2);
            break;
    }
}



