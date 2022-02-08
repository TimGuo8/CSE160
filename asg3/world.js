// ColoredPoint.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE =`
  attribute vec4 a_Position;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotateMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  attribute vec2 a_UV;
  varying vec2 v_UV;
  void main() {
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_GlobalRotateMatrix * u_ModelMatrix * a_Position;
    v_UV = a_UV;
  }`

// Fragment shader program
var FSHADER_SOURCE =`
  precision mediump float;
  uniform vec4 u_FragColor;  
  varying vec2 v_UV;
  uniform sampler2D u_Sampler0;
  uniform int u_whichTexture;
  void main() {

    if(u_whichTexture == -2){
      gl_FragColor = u_FragColor;
      
    }else if(u_whichTexture == -1){
      gl_FragColor = vec4(v_UV,1.0,1.0);

    }else if(u_whichTexture == 0){
      gl_FragColor = texture2D(u_Sampler0, v_UV);

    }else{
      gl_FragColor = vec4(1, .2, .2, 1);

    }

  }`

//global variables
let canvas;
let gl;
let a_Position;
let u_FragColor;
let u_Size;
let u_GlobalRotateMatrix;
let a_UV;
let u_Sampler0;
let u_whichTexture;
let u_ViewMatrix;
let u_ProjectionMatrix;
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
  a_UV = gl.getAttribLocation(gl.program, 'a_UV');
  if (a_UV < 0) {
    console.log('Failed to get the storage location of a_UV');
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
    // Get the storage location of u_Sampler
   u_Sampler0 = gl.getUniformLocation(gl.program, 'u_Sampler0');
    if (!u_Sampler0) {
      console.log('Failed to get the storage location of u_Sampler0');
      return false;
    }
    u_whichTexture = gl.getUniformLocation(gl.program, 'u_whichTexture');
    if (!u_whichTexture) {
      console.log('Failed to get the storage location of u_whichTexture');
      return false;
    }
    u_ProjectionMatrix = gl.getUniformLocation(gl.program, 'u_ProjectionMatrix');
    if (!u_ProjectionMatrix) {
      console.log('Failed to get the storage location of u_ProjectionMatrix');
      return false;
    }
    u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
    if (!u_ViewMatrix) {
      console.log('Failed to get the storage location of u_ViewMatrix');
      return false;
    }

}
//Globals related to UI elements
let g_selectedColor = [1.0,0.0,0.0,1.0];
let g_selectedSize = 5;
let g_selectedSegments = 10;
var g_shapeList = [];
let g_globalAngle = 0;
let g_Animation = false;
let g_horn = 190;
let g_head = 0;
function addActionsForHtmlUI(){
   document.getElementById("AnimationOn").onclick = function(){g_Animation = true;};
   document.getElementById("AnimationOff").onclick = function(){g_Animation = false;};
   document.getElementById("angleSlide").addEventListener('mousemove', function() {g_globalAngle = this.value; renderScene();});
   document.getElementById("hornSlide").addEventListener('mousemove', function(){
    g_horn = this.value;
    renderScene();
   })
   document.getElementById("headSlide").addEventListener('mousemove', function(){
    g_head = this.value;
    renderScene();
   })

}

function initTextures() {

  var image = new Image();  // Create the image object
  if (!image) {
    console.log('Failed to create the image object');
    return false;
  }
  // Register the event handler to be called on loading an image
  image.onload = function(){ sendImageToTEXTURE0(image); };
  // Tell the browser to load an image
  image.src = 'texture.jpg';

  return true;
}

function sendImageToTEXTURE0 (image) {

  var texture = gl.createTexture();   // Create a texture object
  if (!texture) {
    console.log('Failed to create the texture object');
    return false;
  }

  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
  // Enable texture unit0
  gl.activeTexture(gl.TEXTURE0);
  // Bind the texture object to the target
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // Set the texture parameters
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  // Set the texture image
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  
  // Set the texture unit 0 to the sampler
  gl.uniform1i(u_Sampler0, 0);
  
  //gl.clear(gl.COLOR_BUFFER_BIT);   // Clear <canvas>

  //gl.drawArrays(gl.TRIANGLE_STRIP, 0, n); // Draw the rectangle
  console.log("finished loadTexture");
}

function main() {
    //setup
    setupWebGL();
    //connect
    connectVariablesToGLSL();
    
    addActionsForHtmlUI();

    initTextures();
    // Register function (event handler) to be called on a mouse press
    canvas.onmousedown=click;
    canvas.onmousemove = function(ev){ if(ev.buttons == 1) { click(ev); } };

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    //renderScene();
    requestAnimationFrame(tick);
}
let shiftKey = false;
function click(ev){
  g_globalAngle -= ev.movementX;
  shiftKey = ev.shiftKey;
  renderScene();
}
  var g_startTime = performance.now()/1000.0;
  var g_seconds = performance.now()/1000.0 - g_startTime;
  function tick(){
    g_seconds = performance.now()/1000.0 - g_startTime;
    //console.log(g_startTime);
    renderScene();
    requestAnimationFrame(tick);

  }
  function convertCoordinatesEventToGL(ev){
    var x = ev.clientX; // x coordinate of a mouse pointer
    var y = ev.clientY; // y coordinate of a mouse pointer
    var rect = ev.target.getBoundingClientRect();

    x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
    y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
    return [x,y];
  }

  var g_eye = [0,0,3];
  var g_at = [0,0,-100];
  var g_up = [0,1,0];
  function renderScene(){

    var viewMat = new Matrix4();
    viewMat.setLookAt(g_eye[0],g_eye[1],g_eye[2], g_at[0], g_at[1], g_at[2], g_up[0],g_up[1],g_up[2])
    gl.uniformMatrix4fv(u_ViewMatrix, false, viewMat.elements);

    var projMat = new Matrix4();
    projMat.setPerspective(60, canvas.width/canvas.height, .1, 100);
    gl.uniformMatrix4fv(u_ProjectionMatrix, false, projMat.elements);


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
