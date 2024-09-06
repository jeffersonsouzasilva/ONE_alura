alert(" Boas vindas ao jogo do número secreto ");
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

//Enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
  chute = prompt(" Escolha um número entre 1 e 30 ");
  if (chute == numeroSecreto) {
    alert(` Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} tentativas`); //Uso de template string nesta linha, em uma linha com conteudo de string para referenciar variaveis adiciona crase e indica a variavel com ${}
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

//Se chute for igual ao número secreto
