
var buttonColor=["red" , "blue" , "yellow" , "green"];
var gamePattern= [];
var userClickedPattern= [];
var started = false;
var level=0;

$(document).on("keydown" , function(){

  if(started==false){
  
  $("h1").text("Level " + level);
  nextSequence();
  started= true;
  }
});

//nextSequence();

function nextSequence(){
  userClickedPattern = [];

  var n=Math.random()*4;
  n=Math.floor(n);

  var randomChosenColor=buttonColor[n];
  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  level++;
  setTimeout(function(){
    $("h1").text("Follow pattern");
  } , 400);
  $("h1").text("Level " + level);
}

//      1
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
  playSound(userChosenColour);
  animatePress(userChosenColour);
   
  checkAnswer(userClickedPattern.length-1);

});

//       2
//  $(".btn").click(function() {
  
//   var userChosenColour = $(this).attr("id");  // this is use to get element
//   userClickedPattern.puch(userChosenColour); 
 
//   playSound(userChosenColour);

// });

function playSound(name) {

  //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(Cname){
 
  $("#" + Cname).addClass("pressed");

  setTimeout(function(){   
    $("#" + Cname).removeClass("pressed"); 
  } , 100 );

}
  
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){

    if(gamePattern.length === userClickedPattern.length){
      setTimeout(function(){
      nextSequence();
      } , 1000);
    }
  }

  else{
   playSound("wrong");
   $("h1").text("Game Over, press Any Key to Restart ");
   $("body").addClass("GameOver");
   setTimeout(function(){
   $("body").removeClass("GameOver");
   }, 200);
  
   startAgain();
  }  
}  

function startAgain() {
  level = 0;
  gamePattern = []; // initialized zero
  started = false;
}



//sound(randomChosenColor);
//start(randomChosenColor);


// //var take = "sounds/" + randomChosenColor + ".mp3";
// var audio = new Audio();
// audio.addEventListener("load", function() {
//   audio.play();
// }, true);
// audio.src = "sounds/" + randomChosenColor + ".mp3";
// audio.autoplay = true; // add this


    //       one way to play sound by clicking
  // $("." + randomChosenColor).click(function(){
  // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  //   audio.play();
  // });
//



//           final
// $("." + randomChosenColor).on("click" , function( event ){
//   var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
//     audio.play();

// });

           //another way to play sound by clicking
//   $("." + randomChosenColor).on("load" , function( event ){
//   var taken=$("." + randomChosenColor).attr("class");
//   play(taken);
// });


// function play(get){
//   var audio = new Audio("sounds/" + get + ".mp3");
//     audio.play();
// }



//sound(randomChosenColor);
//---click function--
// $(".randomChosenColor").click(function(){
//
// });


// function sound(dicide){

//   switch(dicide){
//    case "blue":
//    var audio1=new Audio("sounds/green.mp3");
//    audio1.play();
//    break;

//    case "green":
//    var audio2=new Audio("sounds/red.mp3");
//    audio2.play();
//    break;

//    case "red":
//    var audio2=new Audio("sounds/yellow.mp3");
//    audio2.play();
//    break;

//    case "yellow":
//    var audio2=new Audio("sounds/blue.mp3");
//    audio2.play();
//    break;


//   default:  
//    console.log("error");
//   }

// }


