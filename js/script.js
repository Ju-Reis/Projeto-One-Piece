const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", ( ) => {

        //desseleciona o botão
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove ("selecionado");

        //adiciona o selecionado no botão clicado
        botao.classList.add("selecionado");

        //desseleciona o personagem
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        //mostra a div que estiver com o selecionado adicionado
        personagens[indice].classList.add("selecionado");

    })
})

