class Cube{
    constructor(){
        this.type ='cube';
        this.position = [0.0,0.0,0.0];
        this.color = [1.0,1.0,1.0,1.0];
        this.matrix = new Matrix4();
        this.textureNum = -1;
      }
    render(){
        //var xy = this.position;
        var rgba = this.color;
       // var size = this.size;
       
       gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);

        //front of the cube
        drawTriangle3DUV( [0.0,0.0,0.0, 1.0,1.0,0.0, 1.0,0.0,0.0],[0,0, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,0.0, 1.0,1.0,0.0],[0,0, 0,1, 1,1]);

        //back of the cube 
        drawTriangle3DUV( [0.0,0.0,1.0, 1.0,1.0,1.0, 1.0,0.0,1.0],[0,0, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,0.0,1.0, 0.0,1.0,1.0, 1.0,1.0,1.0],[0,0, 0,1, 1,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
        //top of the cube
        drawTriangle3DUV( [0.0,1.0,0.0, 0.0,1.0,1.0, 1.0,1.0,1.0],[0,1, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,1.0,0.0, 1.0,1.0,1.0, 1.0,1.0,0.0],[0,1, 1,0, 0,0]);

        //right side of the cube
        drawTriangle3DUV( [1.0,0.0,0.0, 1.0,1.0,1.0, 1.0,0.0,1.0],[0,0, 1,1, 1,0]);
        drawTriangle3DUV( [1.0,0.0,0.0, 1.0,1.0,0.0, 1.0,1.0,1.0],[0,0, 0,1, 1,1] );
        
        //left side of the cube 
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,1.0, 0.0,0.0,1.0],[1,0, 0,1, 0,0]);
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,1.0,0.0, 0.0,1.0,1.0],[1,0, 1,1, 0,1]);

        gl.uniform4f(u_FragColor, rgba[0]*0.5, rgba[1]*0.5, rgba[2]*0.5, rgba[3]);

        //bottom of the cube 
        drawTriangle3DUV( [0.0,0.0,0.0, 0.0,0.0,1.0, 1.0,0.0,1.0],[0,1, 1,1, 1,0]);
        drawTriangle3DUV( [0.0,0.0,0.0, 1.0,0.0,1.0, 1.0,0.0,0.0],[0,1, 1,0, 0,0]);
    }
}