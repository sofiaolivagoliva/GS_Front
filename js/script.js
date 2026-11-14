// INTEGRANTES DO GRUPO
// 1TDSPA - RM574491 – MARINA SANTANA QUEIROZ
// 1TDSPA - RM576524 – SOFIA OLIVEIRA GONÇALVES
// 1TDSPA - RM575649 – JÚLIO BERNARDES DA SILVA
// 1TDSPA - RM575635 – RAFAEL MADEIRA GOMES RIBEIRO
// 1TDSPA - RM576314 – ENRIQUE TRINDADE FERREIRA SILVA


const integrantes = [
    {
        nome: "Rafael Madeira Gomes Ribeiro",
        rm: "575635",
        turma: "1TDSPA",
        foto: "img/rafael.jpeg",
        linkedin: "https://www.linkedin.com/in/rafael-madeira-b8545b312/",
        github: "https://github.com/Ribeir0296"
    },

    {
        nome: "Enrique Trindade Ferreira Silva",
        rm: "576314",
        turma: "1TDSPA",
        foto: "img/enrique.jpeg",
        linkedin: "https://www.linkedin.com/in/enrique-trindade-46a0012b4/",
        github: "https://github.com/enriquetrindade"
    },

    {
        nome: "Júlio Bernardes da Silva",
        rm: "575649",
        turma: "1TDSPA",
        foto: "img/pollo.jpeg",
        linkedin: "https://www.linkedin.com/in/julio-bernardes-da-silva-40738b431/",
        github: "https://github.com/JulioSilva101"
    },

    {
        nome: "Sofia Oliveira Gonçalves",
        rm: "576524",
        turma: "1TDSPA",
        foto: "img/sofia.jpeg",
        linkedin: "https://www.linkedin.com/in/sofia-goncalves-272472431/",
        github: "https://github.com/sofiaolivagoliva"
    },

    {
        nome: "Marina Santana Queiroz",
        rm: "574491",
        turma: "1TDSPA",
        foto: "img/marina.jpeg",
        linkedin: "https://www.linkedin.com/in/marina-santana-queiroz-9baa77241/",
        github: "https://github.com/marinasantanaq"
    }
];

const botoes = document.querySelectorAll(".integrante-btn");

const foto = document.getElementById("foto-integrante");
const nome = document.getElementById("nome-integrante");
const rm = document.getElementById("rm-integrante");
const turma = document.getElementById("turma-integrante");
const linkedin = document.getElementById("linkedin-integrante");
const github = document.getElementById("github-integrante");

function selecionarIntegrante(indice) {

    const integrante = integrantes[indice];

    if (!integrante) return;

    // Atualizar informações
    foto.src = integrante.foto;
    foto.alt = `Foto de ${integrante.nome}`;

    nome.textContent = integrante.nome;
    rm.textContent = integrante.rm;
    turma.textContent = integrante.turma;

    linkedin.href = integrante.linkedin;
    github.href = integrante.github;

    // Atualizar botão selecionado
    botoes.forEach((botao, index) => {

        const selecionado = index === indice;

        botao.classList.toggle("ativo", selecionado);

        botao.setAttribute(
            "aria-selected",
            selecionado
        );
    });
}

// Eventos dos botões
botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const indice = Number(botao.dataset.integrante);

        selecionarIntegrante(indice);

    });

});
