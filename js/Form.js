class Form {
  constructor() {
    this.input= createInput("EnterName");
    this.button = createButton('Play!');
    this.greeting = createElement('h3');

  }

  display(){
    var title = createElement('h2')
    title.html("----Hurdles----");
    title.position(displayWidth / 2 - 10,20);
    
   
   
    
    this.input.position(displayWidth / 2 - 20,displayHeight /2);
    this.button.position(displayWidth / 2 + 150,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello!    " + player.name+"   Please wait till the other players join" );
      this.greeting.position(displayWidth / 2 - 10,displayHeight/2)
    });

  }
  Hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
}
