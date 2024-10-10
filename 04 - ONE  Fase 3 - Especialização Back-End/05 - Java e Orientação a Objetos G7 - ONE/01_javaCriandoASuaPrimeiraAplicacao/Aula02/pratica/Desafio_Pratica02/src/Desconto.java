public class Desconto {
    //6.Declare uma variável do tipo double precoOriginal. Atribua um valor em reais a essa variável, representando o preço original de um produto.
    //   Em seguida, declare uma variável do tipo double percentualDesconto e atribua um valor percentual de desconto ao produto (por exemplo, 10 para 10%).
    //   Calcule o valor do desconto em reais, aplique-o ao preço original e imprima o novo preço com desconto.
    public static void main(String[] args) {
        double precoOriginal = 23.5;
        double percentualDesconto = 0.10;
        double valorDeDesconto = precoOriginal * percentualDesconto;
        double novoPrecoComDesconto = precoOriginal - valorDeDesconto;

        System.out.println("O novo preço com desconto é: R$" + novoPrecoComDesconto);

    }
}

/*
Outra forma de realizar esse exercicio:

public class CalculoDesconto {
    public static void main(String[] args) {
        double precoOriginal = 150.0;

        double percentualDesconto = 10.0;
        double valorDesconto = (percentualDesconto / 100.0) * precoOriginal;
        double novoPreco = precoOriginal - valorDesconto;

        System.out.println("Preço original: R$" + precoOriginal);
        System.out.println("Desconto: R$" + valorDesconto);
        System.out.println("Novo preço com desconto: R$" + novoPreco);
    }
}


*/