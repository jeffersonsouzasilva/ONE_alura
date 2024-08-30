alert(" Boas vindas ao jogo do número secreto ");
let numeroSecreto = 9;
console.log(numeroSecreto)
let chute = prompt(" Escolha um número entre 1 e 30 ");

//Se chute for igual ao número secreto
if(chute == numeroSecreto ){
    alert(` Isso ai! Você descobriu o número ${numeroSecreto} `); //Uso de template string nesta linha, em uma linha com conteudo de string para referenciar variaveis adiciona crase e indica a variavel com ${} 
} else {
    alert("Você errou :( ")
}