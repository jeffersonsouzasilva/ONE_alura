// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 a 10";
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

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
    //return parseInt(Math.random() * 10 + 1);
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeelementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeelementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){ // verficar se ja existe um método, verificar se um elemento esta na lista 
        return gerarNumeroAleatorio();
    } else { //caso numero não esteja na lista 
        listaDeNumeroSorteados.push(numeroEscolhido); // adicionar um numero na lista
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}// a ideia é gerar um numero aleatório caso ja tenha um numero na lista


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