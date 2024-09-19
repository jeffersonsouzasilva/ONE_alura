package br.com.alura.screenmatch.modelos;

// Comando shift + F6 atalho para renomear um elemento ou todos de mesmo nome, sem a necessidade alterar um por um
// Comando alt + insert atalho que possibilita a geração de um método

public class Filme extends Titulo{
    private String diretor;

    public String getDiretor() {
        return diretor;
    }

    public void setDiretor(String diretor) {
        this.diretor = diretor;
    }
}
