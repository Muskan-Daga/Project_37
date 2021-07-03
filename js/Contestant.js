class Contestant{
  constructor(){
    this.name=null;
    this.answer=0;
    this.index=null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data) => {
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
    contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static contestantInfo(){
    var contestantInforef = database.ref('contestants');
    contestantInforef.on("value",(data)=>{
      allContestant = data.val();
    })
  }
}
