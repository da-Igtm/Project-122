x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
to_number=0;
draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number=Number(content);
if(Number.isInteger(to_number)==true){
  draw_apple="set";
  document.getElementById("status").innerHTML="Starting to draw apple";
}
else{
 
  draw_apple="The speech has recognized no numbers";
}

}

function preload(){
  apple=loadImage("apple.png");
  }

function setup() {
  //screen_width=window.innerWidth();
 // screen_height=window.innerHeight();
  canvas=createCanvas(500,500);
    canvas.position(200,150);
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

function draw() {
  if(draw_apple == "set"){
    for(var i = 1; i <= to_number; i++){
        x=Math.floor(Math.random()*700);
        x=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "set";
        speak_data=to_number+"apples drawn";
        speak();
      }
      draw_apple="";
  }}
