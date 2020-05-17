class Game {
  constructor(){
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
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
      player = new Player();
      var playerCountref = await database.ref('playerCount').once("value");
      if(playerCountref.exists()){
       playerCount = playerCountref.val();
       player.getCount();
      }
    
      form = new Form()
      form.display();
    }
  
  
    horse1 = createSprite(70,600);
    horse1.addAnimation("runn1",run1);
    horse1.addAnimation("j1",jump1);
    //horse1.debug = true;
    
    horse1.setCollider ( "rectangle",0,0 ,105,90);
    horse2 = createSprite(70,800);
    horse2.addAnimation("runn2",run2);
    horse2.addAnimation("j2",jump2);
   // horse2.debug = true;
  
    horses = [horse1,horse2];
    
  }
 

 
  play(){
    form.Hide();

    Player.getplayerInput();

    invicibleground1 = createSprite(displayWidth/2,620,5000,10);
    invicibleground1.visible = false;
    
    invicibleground2 = createSprite(displayWidth/2,870,5000,10);
    invicibleground2.visible = false;

 
       
    if(allplayers !== undefined){

      background(back);

      var index = 0;      
      var x;

    player.distance +=1
    player.update();
  

    
  

      for(var plr in allplayers){
      
        index = index+1;

       x = displayWidth-allplayers[plr].distance;

        
        if(index == player.index){
       
          if(keyDown("space")){
               if(index == 1 && horse1.y >540){
                 horses[index-1].velocityY = -12;
               }
               if(index == 2 && horse2.y>790){
                 horses[index-1].velocityY = -12;  
               }
    }
  }
    
     if(index === player.index){
       stroke(10);
       fill("red");
       rect(20,horses[index-1].y+60,150,7);
       horses[index-1].shapeColor="red";     
     

}
}

if(player.index == 1){
  horse2.setCollider ( "rectangle",70,0 ,255,90);
  if(horse2.isTouching(o2group)){
    horse2.velocityY = -8;
  } 
}
if(player.index == 2){
  horse1.setCollider ( "rectangle",70,0 ,255,90);
  if(horse1.isTouching(o1group)){
    horse1.velocityY = -8;
  } 
}






horse1.velocityY = horse1.velocityY+0.5;
horse2.velocityY = horse2.velocityY+0.5;

horse2.collide(invicibleground2);
horse1.collide(invicibleground1);

drawSprites();

spawnObstacles1();
spawnObstacles2();
}
}

}

function spawnObstacles1(){
if(frameCount%70 == 0){
    var hurdle = createSprite(displayWidth+10,550);
    hurdle.velocityX = -8;
    hurdle.addImage("h",hurdles);
    hurdle.scale = 0.2;
    hurdle.lifetime = displayWidth/-8;
    o1group.add(hurdle);
  }
}
function spawnObstacles2(){
  if(frameCount % 65 == 0){
    var hurdl = createSprite(displayWidth+10,800);
    hurdl.velocityX = -8.5;
    hurdl.addImage("hurdle",hurdles);
    hurdl.scale = 0.2;
    hurdl.lifetime = displayWidth/-8.5;
    o2group.add(hurdl);
  }
}

