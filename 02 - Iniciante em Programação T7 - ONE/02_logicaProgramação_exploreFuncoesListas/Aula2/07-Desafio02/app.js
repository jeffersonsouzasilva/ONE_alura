/*
Desafios
1.Criar uma função que exibe "Olá, mundo!" no console.
2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/


// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 a 10";

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}
exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value; // o .value é por conta de não um texto que vamos adicionar
  console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *10 + 1);
}