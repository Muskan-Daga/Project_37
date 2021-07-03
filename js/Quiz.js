class Quiz{
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
    gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant=new Contestant();
      var contestantCountref = await database.ref("contestantCount").once("value");
      if(contestantCountref.exists()){
        contestantCount=contestantCountref.val();
        contestant.getCount();
      }
        question = new Question()
        question.display();
      }
    }

    play(){
      question.hide();
      background ("pink");
      fill("blue");
      textSize(30);
      text("Result of the QUIZ",220,260);
      textSize(22);
      text("Note : Correct answer is indicated by the Green colour",65,300)
      Contestant.contestantInfo();

      if(allContestant !== undefined){
        var dp=320;
        for(var cont in allContestant){
          var ca="2"
          if(ca === allContestant[cont].answer)
          fill("green")
          else
          fill("red")
          dp+=20
          text( allContestant[cont].name + " : " + allContestant[cont].answer , 260 , dp )
        }
      }
    }
  }
