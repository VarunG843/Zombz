class Stone
{
  constructor(x, y, r) 
  {
    let options = {
     restitution : 0.8
    };
    
    this.body = Bodies.rectangle(x, y, r, r, options);
    this.r = r,
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill("brown");
    ellipse(pos.x,pos.y, this.r, this.r);

    pop();
  }
}
