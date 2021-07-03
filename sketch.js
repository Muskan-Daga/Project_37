var canvas, backgroundImage;

var gameState = 0;
var contestantCount;

var database;

var question, contestant, quiz;

var allContestant;

var answer;

function setup(){
  canvas = createCanvas(700,500);
  database = firebase.database();
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
 background("lightblue") ;
  if(contestantCount === 2){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
}
