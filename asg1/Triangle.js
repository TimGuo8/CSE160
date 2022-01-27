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
function drawTriangle(vertices){
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
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
    //enable the assignment to a_Position variable 
    gl.enableVertexAttribArray(a_Position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}

var pictureObj = [
  {
      "type": "triangle",
      "position": [
          -0.32,
          0.06
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.36,
          0.12
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.375,
          0.16
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.38,
          0.205
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.38,
          0.25
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.32,
          0.29
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.26,
          0.305
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.2,
          0.305
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.16,
          0.285
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.14,
          0.245
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.14,
          0.175
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.165,
          0.105
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.215,
          0.07
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.275,
          0.055
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.4,
          0.315
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.42,
          0.415
      ],
      "color": [
          1,
          1,
          0,
          1
      ],
      "size": "13"
  },
  {
      "type": "triangle",
      "position": [
          -0.4,
          0.32
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.425,
          0.43
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.46,
          0.565
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.41,
          0.695
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.31,
          0.705
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.265,
          0.595
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.245,
          0.495
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.24,
          0.415
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.195,
          0.44
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.14,
          0.545
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.08,
          0.59
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.02,
          0.595
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.075,
          0.57
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.11,
          0.46
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.045,
          0.365
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.055,
          0.31
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.095,
          0.235
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.02,
          0.255
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.065,
          0.275
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.175,
          0.28
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.225,
          0.26
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.28,
          0.165
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.24,
          0.09
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.16,
          0.035
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.06,
          0.01
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.025,
          0.01
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.12,
          0.035
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.09,
          -0.035
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.075,
          -0.095
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.06,
          -0.165
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.08,
          -0.265
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.19,
          -0.285
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.26,
          -0.235
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.335,
          -0.16
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.36,
          -0.07
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.36,
          0.01
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.43,
          -0.065
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.515,
          -0.135
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.63,
          -0.165
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.735,
          -0.145
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.76,
          -0.04
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.76,
          0.03
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.735,
          0.075
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.685,
          0.09
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.6,
          0.125
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.535,
          0.15
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.48,
          0.175
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.565,
          0.195
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.735,
          0.23
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.795,
          0.35
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.785,
          0.44
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.72,
          0.48
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.645,
          0.465
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.58,
          0.425
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.515,
          0.375
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.47,
          0.32
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.43,
          0.28
      ],
      "color": [
          1,
          0,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.33,
          -0.215
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.33,
          -0.295
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.33,
          -0.395
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.33,
          -0.47
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.33,
          -0.63
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.335,
          -0.565
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.34,
          -0.68
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.34,
          -0.74
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.355,
          -0.795
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.355,
          -0.87
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.305,
          -0.585
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.26,
          -0.55
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.2,
          -0.52
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.16,
          -0.51
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.1,
          -0.495
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.04,
          -0.475
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.405,
          -0.705
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.46,
          -0.675
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.54,
          -0.645
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.655,
          -0.605
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.74,
          -0.59
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.6,
          -0.63
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.35,
          -0.92
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          -0.015,
          -0.47
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  },
  {
      "type": "triangle",
      "position": [
          0.055,
          -0.46
      ],
      "color": [
          0,
          1,
          0,
          1
      ],
      "size": "19"
  }
]
 