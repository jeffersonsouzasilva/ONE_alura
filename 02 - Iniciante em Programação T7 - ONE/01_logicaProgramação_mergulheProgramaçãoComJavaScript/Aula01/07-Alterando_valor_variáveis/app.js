//Em um projeto prático dentro do curso "Iniciando com JavaScript", 
//você está desenvolvendo um jogo no qual os usuários têm que adivinhar o número secreto. 
// Você escreveu um código que mostra uma mensagem de boas-vindas aos jogadores, 
// pedindo que escolham um número entre 1 e 10, e apresenta uma resposta se eles acertarem, conforme a sequência a seguir:

alert('Boas-vindas ao jogo do número secreto')
let chute = prompt('Escolha um número entre 1 e 10')

let numeroSecreto = 4

if (chute == numeroSecreto) {
   alert('Acertou')
}


// Qual variável você precisaria alterar para mudar o número secreto a cada rodada do jogo?