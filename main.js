mustache=";"
function preload(){
    mustache=loadImage('https://i.postimg.cc/kg1dKkv9/download.png');

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX-5,noseY+15,30,30);
}

function take_snapshot(){
save('myFilterImage.png');
    
}
function modelLoaded(){ 
console.log('PoseNet Is Initalized');

}
noseX=0;
noseY=0;
function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY =  results[0].pose.nose.y;

}



}
