song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("believer Mp3 Imagine dragon.mp3");
    song2 = loadSound("Thunder.m4a");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500); 
}