class Vehicle {
  constructor(x, y, s) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.s = s;
    this.maxspeed = 10;
    this.maxforce = 0.1;
  }

  show() {
    push();
    fill(0, 255, 0);
    translate(this.pos.x, this.pos.y);
    var a = atan2(this.vel.y, this.vel.x);
    rotate(a);
    triangle(0, 0, 0, this.s, 2*this.s, this.s/2);
    pop();
  }

  update() {
    //this.acc = this.heading(this.mouse);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(this.maxspeed);
  }
  
  seek(target){
    this.acc.add(this.heading(target));
  }

  heading(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
  if (d < 10) {
    speed = map(d, 0, 10, 0, this.maxspeed);
    // speed = 0;
    // this.vel = createVector();
    // this.acc = createVector();
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
  }
}