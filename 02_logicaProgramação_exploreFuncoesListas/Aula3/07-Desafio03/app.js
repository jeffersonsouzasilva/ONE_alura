/*
Desafios
1.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/




// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 a 10";

let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
//exibirTextoNaTela("h1", "Jogo do número secreto");
//exibirTextoNaTela("p", "Escolha um número entre 1 a 10");

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value; // o .value é por conta de não um texto que vamos adicionar
    //console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acerto!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        //exibirTextoNaTela("p", "Você descobriu o número secreto com 5 tentativas!");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");// temos um segundo botão que esta desabilitado nos atributos, tem class igual ao primeiro botão, porém id = "reiniciar". Essa linha significa :localizar uma tag pelo id e remover o atributo disabilitado
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero secreto é menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() { // função para gerar numero aleatório entre 1 e 10
    return parseInt(Math.random() * 10 + 1);
}


function limparCampo() { // função para limpar
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true); //
}