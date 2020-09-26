let arBoles = [];
let arBoles2 = [];
let arBoles3 = [];
let arBoles4 = [];
let arBoles5 = [];
let arBoles6 = [];
let arBoles7 = [];
let arBoles8 = [];
let arBoles9 = [];
let arArrayBoles = [];
let arText = [];
let arTextE = [];
let arTextD = [];
let arFonts = [];
let iTimer3;
let iTimer4;
let iTimer6;
let iTimer7;
let iTimeAnimLl;
let iTimeAnimE;
let iTimeAnimD;
let bC;
let tC;

function setup() {
  pixelDensity(1);
  createCanvas(400, 550);
  this.iTimer3 = 0;
  this.iTimer4 = 0;
  this.iTimer6 = 0;
  this.iTimer7 = 0;
  this.iTimeAnimLl = 0;
  this.iTimeAnimE = 0;
  this.bC = color(255, 0, 0);
  this.tC = color(255,255,255)
  arArrayBoles.push(arBoles);
  arArrayBoles.push(arBoles2);
  arArrayBoles.push(arBoles3);
  arArrayBoles.push(arBoles4);
  arArrayBoles.push(arBoles5);
  arArrayBoles.push(arBoles6);
  arArrayBoles.push(arBoles7);
  arArrayBoles.push(arBoles8);
  arArrayBoles.push(arBoles9);
  this.iniArFonts();
}

function draw() {
  squareColor = color(0, 0, 0);
  squareColor.setAlpha(25 );
  fill(squareColor);
  rect(0, 0, 400, 550);
  this.Primer_Rengla();
  this.Segon_Rengla();
  this.Tercer_Rengla();
  this.Quart_Rengla();
  this.Cinquena_Rengla();
  this.Sexta_Rengla();
  this.Septima_Rengla();
  this.Vuitena_Rengla();
  this.Novena_Rengla();
  
  if(arText.length == 0){  
    this.Crear_Paraula();
    this.Crear_Text_Esquerra();
    this.Crear_Text_Dreta();
  }else{
    this.Moure_Lletres();
    this.Moure_Text_Esquerra();
    this.Moure_Text_Dreta();
  }
}

function mousePressed() {
  this.Reset_Animation();
}

function deviceShaken() {
  this.Reset_Animation()
}

function iniArFonts(){
  append(arFonts, 'Tangerine');
  append(arFonts, 'Ranchers');
  append(arFonts, 'Oswald');
  append(arFonts, 'Kufam');
  append(arFonts, 'Robot Mono');
  append(arFonts, 'Grandstander');
  append(arFonts, 'Open Sans Condensed');
  append(arFonts, 'Quicksand');
  append(arFonts, 'Courier Prime');
  append(arFonts, 'Grenze Gotisch');
  append(arFonts, 'Inconsolata');
  append(arFonts, 'Lobster');
  append(arFonts, 'Source Code Pro');
  append(arFonts, 'Dancing Script');
}

function Crear_Paraula(){
  this.iTimeAnimLl = 0;
  append(arText, new LLetre("S", 210, -45, 45, this.tC, this.Get_Font(), 0, 540));
  append(arText, new LLetre("E", 170, -45, 45, this.tC, this.Get_Font(), 20, 485));
  append(arText, new LLetre("C", 210, -45, 45, this.tC, this.Get_Font(), 40, 430));
  append(arText, new LLetre("N", 170, -45, 45, this.tC, this.Get_Font(), 60, 375));
  append(arText, new LLetre("A", 210, -45, 45, this.tC, this.Get_Font(), 80, 320));
  append(arText, new LLetre("N", 170, -45, 45, this.tC, this.Get_Font(), 100, 265));
  append(arText, new LLetre("O", 210, -45, 45, this.tC, this.Get_Font(), 120, 210));
  append(arText, new LLetre("S", 170, -45, 45, this.tC, this.Get_Font(), 140, 155));
  append(arText, new LLetre("É", 210, -45, 45, this.tC, this.Get_Font(), 160, 100));
  append(arText, new LLetre("R", 170, -45, 45, this.tC, this.Get_Font(), 180, 45));
}

function Crear_Text_Esquerra(){
  this.iTimeAnimE = 0;
  append(arTextE, new LLetre("ELECTRONIC", -20, 25, 10, this.bC, this.Get_Font(), 10, 20))
  append(arTextE, new LLetre("MUSIC", -20, 35, 10, this.bC, this.Get_Font(), 30, 20));
  append(arTextE, new LLetre("FESTIVAL", -20, 45, 10, this.bC, this.Get_Font(), 50, 20));
  append(arTextE, new LLetre("#7", -20, 55, 10, this.bC, this.Get_Font(), 20, 20));
}

function Crear_Text_Dreta(){
  this.iTimeAnimD = 0;
  append(arTextD, new LLetre("DIJON", 420, 500, 10, this.bC, this.Get_Font(), 10, 350))
  append(arTextD, new LLetre("DU O7 AU IO", 420, 510, 10, this.bC, this.Get_Font(), 30, 315));
  append(arTextD, new LLetre("NOVEMBER", 420, 520, 10, this.bC, this.Get_Font(), 50, 323));
  append(arTextD, new LLetre("ºO13", 420, 530, 10, this.bC, this.Get_Font(), 20, 353));
}

function Get_Font(){
  return arFonts[int(random(arFonts.length -1))];
}

function Moure_Lletres(){
  this.iTimeAnimLl += 1;
  for(i = 0; i < arText.length; i++){
    if(this.iTimeAnimLl >= arText[i].tComAnim){
      if(arText[i].iCont >= 500){
        arText[i].move(0,1);
      }else if(arText[i].y >= arText[i].yF){
        arText[i].iCont += 1;
        arText[i].pintar_Lletre();
      }else{
        arText[i].move(0,1);
      }
    }
    if(arText[i].y == 600){
      arText.splice(i, 1);
    }
  }
}

function Moure_Text_Esquerra(){
    this.iTimeAnimE += 1;
  for(i = 0; i < arTextE.length; i++){
    if(this.iTimeAnimE >= arTextE[i].tComAnim){
      if(arTextE[i].iCont >= 500){
        arTextE[i].move(0,-1);
      }else if(arTextE[i].x >= arTextE[i].yF){
        arTextE[i].iCont += 1;
        arTextE[i].pintar_Lletre();
      }else{
        arTextE[i].move(1,0);
      }
    }
    if(arTextE[i].y == -10){
      arTextE.splice(i, 1);
    }
  }
}

function Moure_Text_Dreta(){
  
  this.iTimeAnimD += 1;
  for(i = 0; i < arTextD.length; i++){
    if(this.iTimeAnimD >= arTextD[i].tComAnim){
      if(arTextD[i].iCont >= 500){
        arTextD[i].move(0,1);
      }else if(arTextD[i].x <= arTextD[i].yF){
        arTextD[i].iCont += 1;
        arTextD[i].pintar_Lletre();
      }else{
        arTextD[i].move(-1,0);
      }
    }
    if(arTextD[i].y == -10){
      arTextD.splice(i, 1);
    }
  }
}

function Reset_Animation(){
  for (var i = 0; i < arArrayBoles.length; i++){
     arArrayBoles[i].splice(0, arArrayBoles[i].length); 
  }
  arText.splice(0, arText.length);
  arTextD.splice(0, arTextD.length);
  arTextE.splice(0, arTextE.length);
}

function Novena_Rengla(){
  if (arBoles9.length == 0 || arBoles9[arBoles9.length -1].y >= 280){
    append(arBoles9, new Bola(690,60, 50,this.bC));
    this.iTimer7 = 0;
  } else {
    this.iTimer7 += 1;
    for (var i = 0; i < arBoles9.length; i++) {
      arBoles9[i].move(-1,1);
      if(arBoles9[i].x <= -50 || arBoles9[i].y >= 610){
        arBoles9.splice(i, 1);
      }
    }
  }
}

function Vuitena_Rengla(){
  if(arBoles8.length == 0 || arBoles8[arBoles8.length -1].x >= 250){
    append(arBoles8, new Bola(-20,700, 50,this.bC));
  }else{
   for (var i = 0; i < arBoles8.length; i++){
     arBoles8[i].move(1, -1);     
     if(arBoles8[i].x >= 455 || arBoles8[i].y <= -50){
       arBoles8.splice(i, 1);
     }
   }
  }
}

function Septima_Rengla(){
  if (arBoles7.length == 0 || this.iTimer7 >= 350){
    append(arBoles7, new Bola(590,20, 50,this.bC));
    this.iTimer7 = 0;
  } else {
    this.iTimer7 += 1;
    for (var i = 0; i < arBoles7.length; i++) {
      arBoles7[i].move(-1,1);
      if(arBoles7[i].x <= -50 || arBoles7[i].y >= 610){
        arBoles7.splice(i, 1);
      }
    }
  }
}

function Sexta_Rengla(){
  if(arBoles6.length == 0 || this.iTimer6 >= 175){
    append(arBoles6, new Bola(-60,600, 50,this.bC));
    this.iTimer6 = 0;
  }else{
    this.iTimer6 += 1;
   for (var i = 0; i < arBoles6.length; i++){
     arBoles6[i].move(0.75, -0.75);     
     if(arBoles6[i].x >= 455 || arBoles6[i].y <= -55){
       arBoles6.splice(i, 1);
     }
   }
  }
}

function Cinquena_Rengla(){
  if (arBoles5.length == 0 || arBoles5[arBoles5.length - 1].x <= 50){
    append(arBoles5, new Bola(450,20, 50,this.bC));
  } else {
    for (var i = 0; i < arBoles5.length; i++) {
      arBoles5[i].move(-2.5,2.5);
      if(arBoles5[i].x <= -50 || arBoles5[i].y >= 610){
        arBoles5.splice(i, 1);
      }
    }
  }
}

function Quart_Rengla(){
  if(arBoles4.length == 0 || this.iTimer4 >= 255){
    append(arBoles4, new Bola(-60,460, 50,this.bC));
    this.iTimer4 = 0;
  }else{
    this.iTimer4 += 1;
   for (var i = 0; i < arBoles4.length; i++){
     arBoles4[i].move(0.5, -0.5);     
     if(arBoles4[i].x >= 455 || arBoles4[i].y <= -55){
       arBoles4.splice(i, 1);
     }
   }
  }
}

function Tercer_Rengla(){
  if(arBoles3.length == 0 || this.iTimer3 >= 200){
    append(arBoles3, new Bola(390,-60, 50,this.bC));
    this.iTimer3 = 0;
  }else{
    this.iTimer3 += 1;
   for (var i = 0; i < arBoles3.length; i++){
     arBoles3[i].move(-1, 1);     
     if (arBoles3[i].x <= -55 || arBoles3[i].y >= 610){
       arBoles3.splice(i, 1);
     }
   }
  }
}

function Segon_Rengla(){
  if (arBoles2.length == 0 ||arBoles2[arBoles2.length -1].y <= 50){
    append(arBoles2, new Bola(-50,310,50,this.bC));
  }else {
    for (var i = 0; i < arBoles2.length; i++) {
      arBoles2[i].move(1,-1);
      if(arBoles2[i].x >= 400 || arBoles2[i].y <= -50){
        arBoles2.splice(i, 1);
      }
    }
  }
}

function Primer_Rengla(){
  if (arBoles.length == 0 || arBoles[arBoles.length - 1].x <= 50){
    append(arBoles, new Bola(250,-60, 50,this.bC));
  } else {
    for (var i = 0; i < arBoles.length; i++) {
      arBoles[i].move(-1,1);
      if(arBoles[i].x <= -50 || arBoles[i].y >= 610){
        arBoles.splice(i, 1);
      }
    }
  }
}