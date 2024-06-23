/*
Desafio: hora da prática:
1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/


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