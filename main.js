song1 = "";
song2 = "";
scoreRight = 0;
scoreLeft = 0;
rightWristX = false;
rightWristY = false;
leftWristX = false;
leftWristY = false;
function preload(){
    song1 = loadSound("believer Mp3 Imagine dragon.mp3");
    song2 = loadSound("Thunder.mp3");
}
function setup(){
    canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500); 
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	scoreRight =  results[0].pose.keypoints[10].score;
	scoreLeft =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x.true;
	rightWristY = results[0].pose.rightWrist.y.true;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
    }
}