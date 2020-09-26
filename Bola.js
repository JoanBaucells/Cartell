class Bola {
  constructor(x, y, radi, color, limitBoles) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.color = color;
    this.limitBoles = limitBoles;
    this.arBoles = [];
  }
  
  move(x, y){
    this.arBoles =
    this.x += x;
    this.y += y;
    this.pintar_Bola();
  }
  
  pintar_Bola(){
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.radi); 
  }
}