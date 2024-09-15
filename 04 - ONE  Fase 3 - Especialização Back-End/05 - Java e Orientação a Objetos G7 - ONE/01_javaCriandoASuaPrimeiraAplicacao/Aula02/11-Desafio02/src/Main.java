public class Main {
//    comando "sout" para System.out.println();
//    comando ctrl + D para duplicar a linha em baixo

    /*
    Desafio: hora da prática

    Em Java, a manipulação eficiente de variáveis é crucial para armazenar dados em memória. Os tipos primitivos, como inteiros, ponto flutuante, char e boolean, desempenham papéis específicos. A classe String é essencial para operações com textos. O casting resolve conflitos de tipos, permitindo conversões explícitas.

    Essas habilidades formam a base para o desenvolvimento eficaz de programas em Java, por isso criamos atividades práticas (não obrigatórias) para você praticar. Vamos praticar?

    1.Crie um programa que realize a média de duas notas decimais e exiba o resultado.
    2.Declare uma variável do tipo double e uma variável do tipo int. Faça o casting da variável double para int e imprima o resultado.
    3.Declare uma variável do tipo char (letra) e uma variável do tipo String (palavra). Atribua valores a essas variáveis e concatene-as em uma mensagem.
    4.Declare uma variável do tipo double precoProduto e uma variável do tipo int (quantidade). Calcule o valor total multiplicando o preço do produto pela quantidade e apresente o resultado em uma mensagem.
    5.Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável. Considere que o valor de 1 dólar é equivalente a 4.94 reais. Realize a conversão do valor em dólares para reais e imprima o resultado formatado.
    6.Declare uma variável do tipo double precoOriginal. Atribua um valor em reais a essa variável, representando o preço original de um produto. Em seguida, declare uma variável do tipo double percentualDesconto e atribua um valor percentual de desconto ao produto (por exemplo, 10 para 10%). Calcule o valor do desconto em reais, aplique-o ao preço original e imprima o novo preço com desconto.
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