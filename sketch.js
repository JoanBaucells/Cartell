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
let iTimer3;
let iTimer4;
let iTimer6;
let iTimer7;
let iTimeAnimLl;
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
  
}

function draw() {
  let bc = color(0, 0, 0, 25);
  let value = alpha(bc);
  fill(value);
  background(value);
  
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
  }else{
    this.Moure_Lletres();
  }
}

function mousePressed() {
  this.Reset_Animation();
}

function deviceShaken() {
  this.Reset_Animation()
}

function Crear_Paraula(){
  this.iTimeAnimLl = 0;
  append(arText, new LLetre("S", 210, 540, 45, this.tC, 'Georgia', 0));
  append(arText, new LLetre("E", 170, 485, 45, this.tC, 'Georgia', 20));
  append(arText, new LLetre("C", 210, 430, 45, this.tC, 'Georgia', 40));
  append(arText, new LLetre("N", 170, 375, 45, this.tC, 'Georgia', 60));
  append(arText, new LLetre("A", 210, 320, 45, this.tC, 'Georgia', 80));
  append(arText, new LLetre("N", 170, 265, 45, this.tC, 'Georgia', 100));
  append(arText, new LLetre("O", 210, 210, 45, this.tC, 'Georgia', 120));
  append(arText, new LLetre("S", 170, 155, 45, this.tC, 'Georgia', 140));
  append(arText, new LLetre("É", 210, 100, 45, this.tC, 'Georgia', 160));
  append(arText, new LLetre("R", 170, 45, 45, this.tC, 'Georgia', 180));
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

function Reset_Animation(){
  for (var i = 0; i < arArrayBoles.length; i++){
     arArrayBoles[i].splice(0, arArrayBoles[i].length); 
  }
  arText.splice(0, arText.length);
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