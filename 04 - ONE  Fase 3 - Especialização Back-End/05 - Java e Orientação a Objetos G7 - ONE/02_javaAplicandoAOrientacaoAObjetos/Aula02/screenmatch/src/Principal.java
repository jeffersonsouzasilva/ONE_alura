// Comando ctrl + alt + i  atalho para ajuste na indentação do código

import br.com.alura.screenmatch.modelos.Filme;

public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme();
        meuFilme.setNome("O poderoso chefão");
        meuFilme.setAnoDeLancamento(1970);
        meuFilme.setDuracaoEmMinutos(180);


//        System.out.println(meuFilme.nome);
//        System.out.println(meuFilme.anoDeLancamento);

        meuFilme.exibeFichaTecnica();
        meuFilme.avalia(8);
        meuFilme.avalia(5);
        meuFilme.avalia(10);
//        System.out.println(meuFilme.somaDasAvaliacoes);
        System.out.println("Total de avaliações: " + meuFilme.getTotalDeAvaliacoes());
        System.out.println(meuFilme.pegaMedia());
//        meuFilme.somaDasAvaliacoes = 10;
//        meuFilme.totalDeAvaliacoes = 1;
//        System.out.println(meuFilme.pegaMedia());
    }
}