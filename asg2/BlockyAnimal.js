// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =`
  attribute vec4 a_Position;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotateMatrix;
  void main() {
    gl_Position = u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
  }`

// Fragment shader program
var FSHADER_SOURCE =`
  precision mediump float;
  uniform vec4 u_FragColor;  
  void main() {
    gl_FragColor = u_FragColor;
  }`

//global variables
let canvas;
let gl;
let a_Position;
let u_FragColor;
let u_Size;
let u_GlobalRotateMatrix;
function setupWebGL(){
   // Retrieve <canvas> element
   canvas = document.getElementById('webgl');
   // Get the rendering context for WebGL
   //gl = getWebGLContext(canvas);
   gl = canvas.getContext("webgl", {preserveDrawingBuffer: true});
   gl.enable(gl.DEPTH_TEST);
   if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
}

function connectVariablesToGLSL(){
  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Get the storage location of a_Position
  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }
  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if (!u_ModelMatrix) {
    console.log('Failed to get the storage location of u_ModelMatrix');
    return;
  }
  u_GlobalRotateMatrix = gl.getUniformLocation(gl.program, 'u_GlobalRotateMatrix');
  if (!u_GlobalRotateMatrix) {
    console.log('Failed to get the storage location of u_GlobalRotateMatrix');
    return;
  }
}
//Globals related to UI elements
let g_selectedColor = [1.0,0.0,0.0,1.0];
let g_selectedSize = 5;
let g_selectedSegments = 10;
var g_shapeList = [];
let g_globalAngle = 0;
function addActionsForHtmlUI(){
  //color slider
  // document.getElementById("redSlide").addEventListener('mouseup', function() {g_selectedColor[0] = this.value/100});
  // document.getElementById("greenSlide").addEventListener('mouseup', function() {g_selectedColor[1] = this.value/100});
  // document.getElementById("blueSlide").addEventListener('mouseup', function() {g_selectedColor[2] = this.value/100});
  // document.getElementById("alphaSlide").addEventListener('mouseup', function() {g_selectedColor[3] = this.value/100});
  // //size slider
   document.getElementById("angleSlide").addEventListener('mousemove', function() {g_globalAngle = this.value; renderScene();});

  // //clear canvas 
  // document.getElementById("clear").onclick = function(){g_shapeList=[]; renderAllShapes();};

  // document.getElementById("point").onclick = function(){g_selectedType = POINT;};
  // document.getElementById("triangle").onclick = function(){g_selectedType = TRIANGLE;};
  // document.getElementById("circle").onclick = function(){g_selectedType = CIRCLE;};
  // document.getElementById("drawPic").onclick = function(){g_shapeList=[]; g_shapeList=displayDrawing(pictureObj); renderAllShapes();};
  // document.getElementById("eraser").onclick = function(){g_selectedType = CIRCLE; g_selectedColor = [0.0,0.0,0.0,1.0]; g_selectedSize =10;};

}

function main() {
    //setup
    setupWebGL();
    //connect
    connectVariablesToGLSL();
    
    addActionsForHtmlUI();
    // Register function (event handler) to be called on a mouse press

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    renderScene();
}
// var g_points = [];  // The array for the position of a mouse press
// var g_colors = [];  // The array to store the color of a point
// var g_sizes = [];
  function convertCoordinatesEventToGL(ev){
    var x = ev.clientX; // x coordinate of a mouse pointer
    var y = ev.clientY; // y coordinate of a mouse pointer
    var rect = ev.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
    y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
    return [x,y];
  }
  var M = new Matrix4();
  // function drawCube(Matrix){
  //   var cube = new Cube();
  //   cube.matrix .set(Matrix);
  //   cube.render();
  // }
  function renderScene(){
    var globalRotMat = new Matrix4().rotate(g_globalAngle,0,1,0);
    gl.uniformMatrix4fv(u_GlobalRotateMatrix, false, globalRotMat.elements);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    renderBodyParts();

}
function displayDrawing(objArray){
  var temp=[];
  let point;
  var len = objArray.length;
  for(var i = 0; i < len; i++) {
    point = new Triangles();
    point.position = objArray[i].position;
    point.color = objArray[i].color;
    point.size = objArray[i].size;
    temp.push(point);
  }
  return temp;
}
