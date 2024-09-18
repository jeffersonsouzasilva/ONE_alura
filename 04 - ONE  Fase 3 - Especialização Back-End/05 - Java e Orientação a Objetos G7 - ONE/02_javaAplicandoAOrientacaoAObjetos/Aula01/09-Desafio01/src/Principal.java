// Comando ctrl + alt + i  atalho para ajuste na indentação do código

/*
Desafio: hora da prática

Na programação orientada a objetos, conceitos fundamentais como classe, métodos, atributos e instanciação desempenham papéis cruciais na organização e estruturação do código.

Compreender esses conceitos é fundamental para a programação orientada a objetos, pois proporciona uma estrutura organizada, modular e reutilizável ao código. Para aprimorar essas habilidades, criamos uma lista de atividades (não obrigatórias) focada na prática para melhorar ainda mais sua experiência de aprendizagem. Vamos praticar?

1.Crie uma classe Pessoa com um método que exibe "Olá, mundo!" no console.
2.Crie uma classe Calculadora com um método que recebe um número como parâmetro e retorna o dobro desse número.
3.Crie uma classe Musica com atributos titulo, artista, anoLancamento, avaliacao e numAvaliacoes, e métodos para exibir a ficha técnica, avaliar a música e calcular a média de avaliações.
4.Crie uma classe Carro com atributos modelo, ano, cor e métodos para exibir a ficha técnica e calcular a idade do carro.
5.Crie uma classe Aluno com atributos nome, idade, e um método para exibir informações. Crie uma instância da classe Aluno, atribua valores aos seus atributos e utilize o método para exibir as informações.
 */

public class Principal {
    public static void main(String[] args) {
        Filme meuFilme = new Filme();
        meuFilme.nome = "O poderoso chefão";
        meuFilme.anoDeLancamento = 1970;
        meuFilme.duracaoEmMinutos = 180;

//        System.out.println(meuFilme.nome);
//        System.out.println(meuFilme.anoDeLancamento);

        meuFilme.exibeFichaTecnica();
        meuFilme.avalia(8);
        meuFilme.avalia(5);
        meuFilme.avalia(10);
        System.out.println(meuFilme.somaDasAvaliacoes);
        System.out.println(meuFilme.totalDeAvaliacoes);
        System.out.println(meuFilme.pegaMedia());
    }
}