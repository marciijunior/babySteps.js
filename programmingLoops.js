console.log("Trabalhando com condicionais e loops:");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("Idade do comprador:", idadeComprador);
if(temPassagemComprada){
    console.log("Passagem está comprada? Sim. \n")
}else{
    console.log("Passagem está comprada? Não. \n")
}
console.log("Destinos possíveis:");
console.log(listaDeDestinos);
console.log("--------------------------------------------------");


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
     if (listaDeDestinos[contador] == destino){
        console.log("Destino disponível.")
        destinoExiste = true;
        break;
     };
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);
if(podeComprar && destinoExiste == true){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe, tivemos um erro!")
}

console.log("Embarque: \n \n");
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar sem passagem!")
}

console.log(listaDeDestinos);


//No primeiro espaço irá declarar a variável, no segundo espaço será a condição que ele vai verificar depois de cada loop e o terceiro será o que ele realmente roda no final de cada loop.
for(let i = 0; i < 3; i++){
    if (listaDeDestinos[i] == destino){
       destinoExiste = true;
       break;
    };
}

//tipos bolleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);