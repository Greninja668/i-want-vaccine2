nose_x=0
nose_y=0
difference=0
left_wrist=0
right_wrist=0
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,100)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotposes)
}
function draw(){
    background("red")
    fill("cyan")
    stroke("lime")
    textSize(difference)
    text("I want vaccine",nose_x,nose_y,)
    document.getElementById("square_sides").innerHTML="width and height of square is- "+difference+" px"
}
function modelLoaded(){
    console.log("posenet is initialised")
}
function gotposes(results){
    if (results.length>0) {
    console.log(results)
    nose_x=results[0].pose.nose.x 
    nose_y=results[0].pose.nose.y 
    console.log("nose_x= "+nose_x+" nose_y= "+nose_y)
    left_wrist=results[0].pose.leftWrist.x 
    right_wrist=results[0].pose.rightWrist.x
    difference=floor(left_wrist-right_wrist)
    console.log("left_wrist_x= "+left_wrist+" right_wrist_x= "+right_wrist+" difference= "+difference)
    }
}