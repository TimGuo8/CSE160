function renderBodyParts(){

    // M.translate(-.25, -.5, 0.0);
    // M.scale(0.5, 1, 0.5);
    // drawCube(M);

    //lion head
    //head base
    var head = new Cube();
    head.color = [128/255, 75/255, 37/255,1];
    head.matrix.rotate(30, 1, 0, 0);
    var headCoordinatesMat = new Matrix4(head.matrix);
    head.matrix.translate(-0.395, -0.55, -0.21);
    head.matrix.scale(0.75, 0.7, 0.2);
    head.render();

    //face
    var face = new Cube();
    face.color = [204/255, 154/255, 67/255,1];
    face.matrix=headCoordinatesMat;
    var faceCoordinatesMat = new Matrix4(face.matrix);
    face.matrix.translate(-0.25, -0.4, -0.3);
    face.matrix.scale(0.45, 0.45, 0.1);
    face.render();

    //mouth
    var mouth = new Cube();
    mouth.color=[84/255, 54/255, 8/255,1];
    mouth.matrix=faceCoordinatesMat;
    var mouthCoordinatesMat = new Matrix4(mouth.matrix);
    mouth.matrix.translate(-0.09, -0.35, -0.31);
    mouth.matrix.scale(0.14, 0.1, 0.1);
    mouth.render();

    //left eye
    var l_eye = new Cube();
    l_eye.color=[84/255, 54/255, 8/255,1];
    l_eye.matrix=mouthCoordinatesMat;
    var leftEyeCoordinatesMat = new Matrix4(l_eye.matrix);
    l_eye.matrix.translate(-0.15, -0.15, -0.31);
    l_eye.matrix.scale(0.05, 0.1, 0.1);
    l_eye.render();

    //right eye
    var r_eye = new Cube();
    r_eye.color=[84/255, 54/255, 8/255,1];
    r_eye.matrix=leftEyeCoordinatesMat;
    var rightEyeCoordinatesMat = new Matrix4(r_eye.matrix);
    r_eye.matrix.translate(0.05, -0.15, -0.31);
    r_eye.matrix.scale(0.05, 0.1, 0.1);
    r_eye.render();
    
    //left ear
    var l_ear = new Cube();
    l_ear.color=[204/255, 154/255, 67/255,1];
    l_ear.matrix=rightEyeCoordinatesMat;
    var leftEarCoordinateMat = new Matrix4(l_ear.matrix);
    l_ear.matrix.translate(-0.25, 0.15, -0.15);
    l_ear.matrix.scale(0.12, 0.08, 0.05);
    l_ear.render();

    //right ear
    var r_ear = new Cube();
    r_ear.color=[204/255, 154/255, 67/255,1];
    r_ear.matrix=leftEarCoordinateMat;
    r_ear.matrix.translate(0.08, 0.15, -0.15);
    r_ear.matrix.scale(0.12, 0.08, 0.05);
    r_ear.render();

    //lion body 
    var body = new Cube();
    body.color = [204/255, 154/255, 67/255,1];
   // body.matrix = bodyCoordinateMat;
    body.matrix.rotate(90, 1, 0, 0);
    var bodyCoordinateMat = new Matrix4(body.matrix);
    body.matrix.translate(-.25, 0, 0.0);
    body.matrix.scale(0.5, 0.8, 0.5);
    body.render();

    //front right leg 
    var fr_leg = new Cube();
    fr_leg.color=[117/255, 89/255, 46/255,1];
    fr_leg.matrix = bodyCoordinateMat;
    var frLegCoordinateMat = new Matrix4(fr_leg);
    fr_leg.matrix.translate(-.25, 0, 0.5);
    fr_leg.matrix.scale(0.15, 0.15, 0.25);
    fr_leg.render();

}