class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      var pos = this.body.position;
      fill("gray");
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      
      fill("black");
      rectMode(CENTER);
      rect(pos.x,pos.y - 43,this.width - 25,this.height - 15);
      
      fill("gray");
      rectMode(CENTER);
      rect(pos.x + 43,pos.y - 45,this.width - 40,this.height - 35);
      
      // You could also use an image if you want a specific look

    };
}
