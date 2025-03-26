console.log("Trabalhando com condicionais:");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = false;

console.log("Idade do comprador:", idadeComprador);
if(temPassagemComprada){
    console.log("Passagem está comprada? Sim. \n")
}else{
    console.log("Passagem está comprada? Não. \n")
}
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); //Removendo um item da lista somente se ele for menor de idade.
}else{
    //Nessa etapa do codigo já sabemos que o comprador é menor de idade.
    if(estaAcompanhada){
        console.log("Comprador é menor de idade porém está acompanhada.");
        listaDeDestinos.splice(1,1);
        //Removendo um item da lista somente se ele for menor de idade.
    }else{
        //A pessoa é menor de idade
        console.log("Não é possível a venda para menores de idades desacompanhados.");
    }
}

console.log("--------------------------------------------------");
//Duas formas de escrever esse código.
if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem!");
    listaDeDestinos.splice(1,1); //Removendo um item da lista somente se ele for menor de idade.
    }else{
        //A pessoa é menor de idade
        console.log("Não é possível a venda para menores de idades desacompanhados.");
}

console.log("Embarque: \n \n");
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem!");
}else{
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);

//tipos bolleanos
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);