let palavra;

function setup() {
  createCanvas(400, 400);
  
  palavra = palavraAleatória(0);
}

function palavraAleatória() {
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];
  
  return random(palavras);
}

function inicializaCores() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1,
palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw(){
  
   inicializaCores();
  
   let texto = palavraParcial(0, width);
  
   text(texto, 200, 200);
}

function modoNoturno(horario) {
  if (horario>18){
    console.log("voce precisa ligar o modo escuro!");
  } else{
    console.log ("modo noturno nao e necessario neste momento.");
  }
}