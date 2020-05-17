var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allplayers;

var horse1,horse2;

var invicibleground1,invicibleground2;

var back;

var run1,run2,jump1,jump2;

var horses;

var o1group,o2group;

var socket;

function preload(){
  run1 = loadAnimation("horse-run-00.png","horse-run-01.png","horse-run-02.png","horse-run-03.png","horse-run-04.png","horse-run-05.png","horse-run-06.png");
  jump1 = loadAnimation("horse-bend-00.png");
  run2 = loadAnimation("ice-horse-run-00.png","ice-horse-run-01.png","ice-horse-run-02.png","ice-horse-run-03.png","ice-horse-run-04.png","ice-horse-run-05.png","ice-horse-run-06.png");
  jump2 = loadAnimation("ice-horse-bend-00.png");
  back = loadImage('back.png');
  hurdles = loadImage('hurdles.png');
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  o1group = new Group();
  o2group = new Group();

 // socket = io.connect('http://127.0.0.1:3000');
}



function draw(){
  background("white");
  //if(gameState == 1 && player.index == 1){
   // console.log('Sending  : '+horse1.y+','+horse1.x);

   // var data={
   //   x:horse1.x,
   //   y:horse1.y
     
   // }

   // socket.emit('horse1.position',data);
  //}
  if(playerCount == 2){
    
    game.update(1);

  }
  if(gameState == 1){
   // clear();
    game.play();
  }
}
