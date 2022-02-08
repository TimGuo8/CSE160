class Triangles{
  constructor(){
    this.type ='triangle';
    this.position = [0.0,0.0,0.0];
    this.color = [1.0,1.0,1.0,1.0];
    this.size = 5.0;
  }
  render(){
    var xy = this.position;
    var rgba = this.color;
    var size = this.size;

    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
    // Pass the size of a point to u_Size variable
    gl.uniform1f(u_Size, size);
    // Draw
    //gl.drawArrays(gl.POINTS, 0, 1);
    var d = this.size/400;
    drawTriangle([xy[0], xy[1]+d, xy[0]-d, xy[1]-d, xy[0]+d, xy[1]-d ])
  }
}
function drawTriangle3D(vertices){
  var n = 3;

  //create buffer object 
  var vertexBuffer = gl.createBuffer();
  if(!vertexBuffer){
      console.log("fail to create the buffer object");
      return -1;
  }
  //bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  //write data into the buffer object 
  //change static to dynamic -> keep sending data
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  //assign the buffer object to a_Position variable 
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
  //enable the assignment to a_Position variable 
  gl.enableVertexAttribArray(a_Position);

  gl.drawArrays(gl.TRIANGLES, 0, n);
}
function drawTriangle3DUV(vertices,uv){
var n = 3;

//create buffer object 
var vertexBuffer = gl.createBuffer();
if(!vertexBuffer){
    console.log("fail to create the buffer object");
    return -1;
}
//bind the buffer object to target
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
//write data into the buffer object 
//change static to dynamic -> keep sending data
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
//assign the buffer object to a_Position variable 
gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
//enable the assignment to a_Position variable 
gl.enableVertexAttribArray(a_Position);

 //create uv buffer 
 var uvBuffer = gl.createBuffer();
 if(!uvBuffer){
     console.log("fail to create the buffer object");
     return -1;
 }
 //bind the buffer object to target
 gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
 //write data into the buffer object 
 //change static to dynamic -> keep sending data
 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);
 //assign the buffer object to a_Position variable 
 gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);
 //enable the assignment to a_Position variable 
 gl.enableVertexAttribArray(a_UV);

gl.drawArrays(gl.TRIANGLES, 0, n);
}

