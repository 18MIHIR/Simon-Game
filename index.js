
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern=[]

var gamePattern = [];

var started =false;

var level=0; 

$(document).keydown(function() {
  if (!started) {

    
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
 
  var UserChosenColour=$(this).attr("id");
  
  userClickedPattern.push(UserChosenColour);
   
  makeSound(UserChosenColour);
  animatePress(UserChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
  
    if(userClickedPattern.length=== gamePattern.length){

      setTimeout(function(){
     nextSequence();
      },1000)
    }
  }

  else{
    
    
  
    makeSound("wrong");

   $("body").addClass("game-over");
   setTimeout(function(){
    $("body").removeClass("game-over");
   },200);
   
   $("#level-title").text("Game Over, Press Any Key to Restart");
   startOver();
  }
  }

   
function nextSequence() {
  userClickedPattern= [];

 level++;

 $("#level-title").text("Level " + level);
 
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   makeSound(randomChosenColour);

}




function makeSound(name){
  var Sound=new Audio("sounds/"+ name+".mp3");
  
   Sound.play();
  }

function animatePress(currentColour)  {
  
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" +currentColour).removeClass("pressed");
  }, 100);
  // setTimeout(() => {
  //   $("#"+currentColour).removeClass("pressed");
  // }, 100);
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
  }
