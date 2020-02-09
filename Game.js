class Game {
    constructor(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState= data.val();
        
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
    var playerCountRef = await database.ref('playerCount').once("value");
    if(playerCountRef.exists()){
      playerCount = playerCountRef.val();
      player.getCount();
    }
    form = new Form()
    form.display();
  }
}
car1 =  createsprite(100,200);
car2 = createsprite(300,200);
car3 = createsprite(500,200);
car4 = createsprite(700,200);
cars = [car1,car2,car3,car4];

play(){
  form.hide();
  textSize(30);
  text("Game Start", 120, 100)
  Player.getPlayerInfo();

  if(allPlayers !== undefined){
    var index=0;
    var x=0;
    var y ;
  
    for(var plr in allPlayers){
    index = index+1;
    x=x+200;
    y = displayHeight - allPlayers[plr].distance;
    cars[index-1].x=x;
    cars[index-1].y=y;
    if(index=== player.index){
      cars[index-1].shapeColor="red";
      camera.position.x = displayWidth/2;
      camera.position.y = cars[index-1].y;
    }
  
     // textSize(15);
     // text(allPlayers[plr].name + " : " + allPlayers[plr].distance, 120,display_position)
    }
  }

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10;
    player.update();
  }
  drawSprites();
}
}