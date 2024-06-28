/*
Desafios
1.Download do arquivo deste projeto(esse arquivo aqui)
2.Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
3.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
4.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
5.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
6.Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
7.Caso precise de ajuda, opções de solução das atividades estarão disponíveis na seção “Opinião da pessoa instrutora”.
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