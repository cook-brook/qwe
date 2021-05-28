function preload(){
    
}
function setup() {
    canvas = createCanvas(800, 580);
   canvas.position(300, 200); 
   video = createCapture(VIDEO);
   video.hide();
    
  } 


function draw(){
    image(video,230,150,220,200);



    fill(0,0,255);
    stroke(0,0,255);
    rect(85, 20, 650, 55);

    fill(255,0,0);
    stroke(255,0,0);
    circle(570,50,80);

    fill(0,0,255);
    stroke(0,0,255);
    rect(85, 20, 55 ,500);

    fill(0,0,255);
    stroke(0,0,255);
    rect(85, 500, 650, 55);

    
    fill(0,0,255);
    stroke(0,0,255);
    rect(700, 20, 55 ,535);

    fill(255,0,0);
    stroke(255,0,0);
    circle(300,50,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(300,535,80);

    fill(255,0,0);
    stroke(255,0,0);
    circle(570,535,80);

    fill(128,128,128);
    stroke(128,128,128);
    rect(500, 75, 10 ,425);

    fill(128,128,128);
    stroke(128,128,128);
    rect(565, 90, 10 ,410);  
}

function Take_snapshot()
{
    save('student_name.png');
 }