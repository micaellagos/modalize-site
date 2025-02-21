function irParaServicos(){
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
}
function irParaBeneficios(){
    document.getElementById('beneficios').scrollIntoView({ behavior: 'smooth' });
}
function irParaPromocao(){
    document.getElementById('promocao').scrollIntoView({ behavior: 'smooth' });
}
function irParaForm(){
    window.location.href='/form';
}

document.addEventListener("DOMContentLoaded", function () {
    const botoes = {
        esquerda1: document.querySelector(".botaoPraEsquerda1"),
        direita1: document.querySelector(".botaoPraDiretita1"),
    };

    const opcoes = document.querySelectorAll(".tituloServicos");
    const servicos = document.querySelectorAll(".servico");
    let indiceAtual = 0;

    function atualizarVisibilidade() {
        opcoes.forEach((opcao, index) => {
            opcao.classList.toggle("ativa", index === indiceAtual);
        });
        servicos.forEach((servico, index) => {
            servico.classList.toggle("ativo", index === indiceAtual);
        });
    }

    botoes.direita1.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % opcoes.length;
        atualizarVisibilidade();
    });

    botoes.esquerda1.addEventListener("click", function () {
        indiceAtual = (indiceAtual - 1 + opcoes.length) % opcoes.length;
        atualizarVisibilidade();
    });

    atualizarVisibilidade();
});
document.addEventListener("DOMContentLoaded", function () {
    const botoes = {
        esquerda2: document.querySelector(".botaoPraEsquerda2"),
        direita2: document.querySelector(".botaoPraDiretita2"),
    };

    const opcoes = document.querySelectorAll(".tituloServicos");
    const servicos = document.querySelectorAll(".servico");
    let indiceAtual = 0;

    function atualizarVisibilidade() {
        opcoes.forEach((opcao, index) => {
            opcao.classList.toggle("ativa", index === indiceAtual);
        });
        servicos.forEach((servico, index) => {
            servico.classList.toggle("ativo", index === indiceAtual);
        });
    }

    botoes.direita2.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % opcoes.length;
        atualizarVisibilidade();
    });

    botoes.esquerda2.addEventListener("click", function () {
        indiceAtual = (indiceAtual - 1 + opcoes.length) % opcoes.length;
        atualizarVisibilidade();
    });

    atualizarVisibilidade();
});