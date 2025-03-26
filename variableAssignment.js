console.log ("Trabalhando com atribuição de variáveis!");
// const idade = 29;
let primeiroNome = "Ricardo";
const sobrenome = "Bugan";

//são as mesmas coisas
console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);

//é possível atribuir variavel em linhs diferentes.
let idade;
idade = 26;
idade = idade + 1;
console.log(idade);