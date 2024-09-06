/*
Desafios finais:
1.Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
4.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
6.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
9.Use um loop while para imprimir os números de 1 a 10 no console.
10.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
11.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
12.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/



//Game Completo
alert(" Boas vindas ao jogo do número secreto ");
let numeroSecreto = parseInt(Math.random() *100 + 1);// de 1 a 100
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
  chute = prompt(" Escolha um número entre 1 e 100 ");
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
