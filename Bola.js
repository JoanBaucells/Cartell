class Bola {
  constructor(x, y, radi, color) {
    this.x = x;
    this.y = y;
    this.radi = radi;
    this.color = color;
  }
  
  move(x, y){
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