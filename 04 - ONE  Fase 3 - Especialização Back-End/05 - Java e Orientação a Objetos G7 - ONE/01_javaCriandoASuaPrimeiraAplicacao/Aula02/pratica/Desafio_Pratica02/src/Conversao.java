import java.util.Scanner;

public class Conversao {
    //5.Declare uma variável do tipo double valorEmDolares. Atribua um valor em dólares a essa variável.
    //   Considere que o valor de 1 dólar é equivalente a 4.94 reais.
    //    Realize a conversão do valor em dólares para reais e imprima o resultado formatado.
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);
        double reais = 4.94;

        System.out.println("Digite o valor em Dólares que gostaria de converter:");
        double valorEmDolares = leitura.nextDouble();

        double conversao = valorEmDolares * reais;

        System.out.println(" Dólares convertidos em reais é equivalente a: R$" + conversao);
    }
}
