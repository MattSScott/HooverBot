var vehicle;
var food = [];
  
function setup() {
  createCanvas(600, 400);
  vehicle = new Vehicle(100, 200, 25);
  
  for(var i=0; i<5; i++){
    food.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  var record = 9999;
  var closest = -1;
  
  for(var i=0; i<food.length; i++){
    fill(255, 0, 0);
    ellipse(food[i].x, food[i].y, 10, 10);
    var d = vehicle.pos.dist(food[i]);
    if(d < record){
      closest = i;
      record = d;
    }
  }

  vehicle.show();
  vehicle.update();
  if(food.length){
  vehicle.seek(food[closest]);
  }
  else{
    noLoop()
    console.log("CLEAN!");
  }
  
  if(record < 10){
      food.splice(closest, 1);
    }
}