console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

console.log("Destinos possíveis:");
console.log(listaDeDestinos); 

listaDeDestinos.splice(1,1); //removendo um item da lista somente se ele for menor de idade.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]); //imprime o segundo elemento da lista.