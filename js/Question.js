class Question{
  constructor() {
    this.title=createElement('h1');
    this.input1=createInput(" Enter your Name ");
    this.input2=createInput(" Enter correct option number ");
    this.button=createButton('Submit');
    this.question=createElement('h3');
    this.option1=createElement('h4');
    this.option2=createElement('h4');
    this.option3=createElement('h4');
    this.option4=createElement('h4');
  }

  hide(){
    this.title.hide();
this.input1.hide();
this.input2.hide();
this.button.hide();
  }

  display(){
    this.title.html("QUIZ");
    this.title.position(305, 0);
    
     
    this.input1.position(150, 250);
    this.input2.position(350, 250);
    this.button.position(300, 300);

    this.question.html("QUESTION: I pefer tea __ coffee ");
    this.question.position(150,80);
    this.option1.html("1:AND");
    this.option1.position(150,110);
    this.option2.html("2:TO");
    this.option2.position(150,140);
    this.option3.html("3:OVER");
    this.option3.position(150,170);
    this.option4.html("4:THAN");
    this.option4.position(150,200);

      this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();

      contestantCount+=1;
      contestant.index=contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

  }
}
