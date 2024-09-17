public class Main {
//    comando "sout" para System.out.println();
//    comando ctrl + D para duplicar a linha em baixo
//    comando alt + insert para criar nova class, porém a guia de projeto tem que estar aberta use alt + 1 para abrir

    /*
     Desafio: hora da prática

     Vimos como usar comparações para condicionais, integrar leitura do teclado com a classe Scanner, explorar alternativas para condicionais e empregar estruturas de repetição como for e while. Esses conhecimentos constituem a base para o desenvolvimento eficaz de programas em Java.

    Para aprimorar essas habilidades, propomos atividades práticas (não obrigatórias). Vamos lá?

    1.Crie um programa que solicite ao usuário digitar um número. Se o número for positivo, exiba "Número positivo", caso contrário, exiba "Número negativo".
    2.Peça ao usuário para inserir dois números inteiros. Compare os números e imprima uma mensagem indicando se são iguais, diferentes, o primeiro é maior ou o segundo é maior.
    3.Crie um menu que oferece duas opções ao usuário: "1. Calcular área do quadrado" e "2. Calcular área do círculo". Solicite a escolha do usuário e realize o cálculo da área com base na opção selecionada.
    4.Crie um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.
    5.Crie um programa que solicite ao usuário a entrada de um número inteiro. Verifique se o número é par ou ímpar e exiba uma mensagem correspondente.
    6.Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

     */
    public static void main(String[] args) {
        System.out.println("Esse é o Screen Match");
        System.out.println("Filme: Top Gun: Maverick");

        int anoDeLancamento = 2022;
        System.out.println("Ano de lançamento: " + anoDeLancamento);
        boolean incluidoNoPlano = true;
        double notaDuFilme = 8.1;
        //Média calculada pelas 3 notas da Jack, Paulo e Suelem
        double media = (9.8 + 6.3 + 8.0) /3;
        System.out.println(media);
        String sinopse;
//        sinopse = " Filme de aventura com galã dos anos 80";
//        System.out.println(sinopse);
        sinopse = """
                Filme Top Gun
                Filme de aventura com galã dos anos 80
                Muito bom!
                Ano de lançamento
                """ + anoDeLancamento; //o conteudo vai ser mostrado em linhas diferentes
        System.out.println(sinopse);

        int classificacao = (int) (media /2);
        System.out.println(classificacao);
    }

}
