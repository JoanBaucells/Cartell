class LLetre {
  constructor(lletre, x, y, size, color, font, tComAnim, yF) {
    this.lletre = lletre;
    this.x = x;
    this.yF = yF;
    this.y = y;
    this.size = size;
    this.color = color;
    this.font = font;
    this.iCont = 0;
    this.tComAnim = tComAnim;
  }
  
  move(x, y){
    this.x += x;
    this.y += y;
    this.pintar_Lletre();
  }
  
  pintar_Lletre(){
    textStyle(BOLD);
    fill(this.color);
    textSize(this.size);
    textFont(this.font);
    text(this.lletre, this.x, this.y);
  }
}