alert(" Boas vindas ao jogo do número secreto ");
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() * numeroMaximo  + 1);// de 1 a 5000
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

//Descobrindo sobre Math.random() :
//Math.random() função para gerar um número pisseudo aleatório, entre 0 e 1 (numero > 0 && numero < 1)
//Math.random() *10 multiplica por 10 o numero gerado
//parseInt(Math.random() *10)  só utilizar o inteiro, sem as casas decimais após a virgula
//parseInt(Math.random() *10 + 1) para entre 1 e 10. Para enter direito lembre-se a função Math.random() gera um número entre 0 e 1 (numero > 0 && numero < 1)


//Enquanto chute não for igual ao n.s
while (chute != numeroSecreto) {
  chute = prompt(` Escolha um número entre 1 e ${numeroMaximo}  `);
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}


//Opção mais bem usado no mercado do que o trecho de código abaixo (usando if else)
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // a variavel tenativa é maior que 1, se true 'tentativas' ou se false 'tentativa'
alert(` Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} ${palavraTentativa}`); //Uso de template string nesta linha, em uma linha com conteudo de string para referenciar variaveis adiciona crase e indica a variavel com ${}

//Inicialmente usamos if else, porém o trecho de código acima é mais proficional
// if (tentativas > 1){
//   alert(` Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} tentativas`); //Uso de template string nesta linha, em uma linha com conteudo de string para referenciar variaveis adiciona crase e indica a variavel com ${}
// } else{
//   alert(` Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} tentativa`);
// }
