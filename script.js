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
    window.location.href='/form/form.html';
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
    function configurarBotoes(esquerdaSelector, direitaSelector) {
        const botoes = {
            esquerda: document.querySelector(esquerdaSelector),
            direita: document.querySelector(direitaSelector),
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

        botoes.direita.addEventListener("click", function () {
            indiceAtual = (indiceAtual + 1) % opcoes.length;
            atualizarVisibilidade();
        });

        botoes.esquerda.addEventListener("click", function () {
            indiceAtual = (indiceAtual - 1 + opcoes.length) % opcoes.length;
            atualizarVisibilidade();
        });

        atualizarVisibilidade();
    }

    // Configura os dois grupos de botões
    configurarBotoes(".botaoPraEsquerda2", ".botaoPraDireita2");
    configurarBotoes(".botaoPraEsquerda3", ".botaoPraDireita3");
});
