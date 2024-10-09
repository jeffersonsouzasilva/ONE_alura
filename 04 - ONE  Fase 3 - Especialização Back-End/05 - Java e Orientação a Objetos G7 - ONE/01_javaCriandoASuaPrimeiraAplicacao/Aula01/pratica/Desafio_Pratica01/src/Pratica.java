import java.util.Scanner;

    /*
    Desafio: hora da prática

    Para consolidar as ideias de classe em Java, propomos atividades práticas (não obrigatórias) que enriquecerão ainda mais sua compreensão desses princípios fundamentais.

    Pronto para colocar esses conceitos em prática?

    1. Crie um projeto Java no IntelliJ que deve conter uma classe chamada Perfil, com o método main, que ao executar deverá imprimir um cumprimento personalizado no console. Por exemplo, "Olá, [Seu Nome]!".
    2. Modifique o programa para imprimir uma segunda mensagem de cumprimento personalizada. Por exemplo, "Tudo bem?".
    3. Crie uma classe chamada Estudos para imprimir anotações de estudos no console.
    4. Crie uma classe Soma em Java para imprimir no console o resultado da operação 10 + 5. Certifique-se de que o resultado seja exibido sem o uso de aspas, apresentando o valor "15" ao invés da expressão "10+5".
    5. Crie uma classe Subtracao para imprimir o resultado de 10 - 5 no console.
    */

public class Pratica {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in) ;

        System.out.println("Olá, Jefferson!");
        System.out.println("Tudo bem ?");
        String comprimento = leitura.nextLine();

        System.out.println(comprimento + " também !");
    }
}
