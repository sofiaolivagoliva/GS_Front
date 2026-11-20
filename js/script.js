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
        foto: "../img/rafael.jpeg",
        linkedin: "https://www.linkedin.com/in/rafael-madeira-b8545b312/",
        github: "https://github.com/Ribeir0296"
    },

    {
        nome: "Enrique Trindade Ferreira Silva",
        rm: "576314",
        turma: "1TDSPA",
        foto: "../img/enrique.jpeg",
        linkedin: "https://www.linkedin.com/in/enrique-trindade-46a0012b4/",
        github: "https://github.com/enriquetrindade"
    },

    {
        nome: "Júlio Bernardes da Silva",
        rm: "575649",
        turma: "1TDSPA",
        foto: "../img/pollo.jpeg",
        linkedin: "https://www.linkedin.com/in/julio-bernardes-da-silva-40738b431/",
        github: "https://github.com/JulioSilva101"
    },

    {
        nome: "Sofia Oliveira Gonçalves",
        rm: "576524",
        turma: "1TDSPA",
        foto: "../img/sofia.jpeg",
        linkedin: "https://www.linkedin.com/in/sofia-goncalves-272472431/",
        github: "https://github.com/sofiaolivagoliva"
    },

    {
        nome: "Marina Santana Queiroz",
        rm: "574491",
        turma: "1TDSPA",
        foto: "../img/marina.jpeg",
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

// DADOS DOS ESTABELECIMENTOS POR ESTADO
//Para cada estado uma tabela difer
const estabelecimentos = {

    // TODOS - Informações originais
    "": [
        {
            nome: "Padaria Pão Quente",
            endereco: "Rua das Flores, 123 - São Paulo",
            contato: "(11) 1234-5678",
            descricao: "Pães artesanais e industriais",
            ofertas: "Descontos em pães e bolos"
        },

        {
            nome: "Padaria Pão Dourado",
            endereco: "Rua das Acácias, 250 - Rio de Janeiro",
            contato: "(21) 2233-4455",
            descricao: "Pães, bolos e produtos artesanais",
            ofertas: "Descontos em pães"
        },

        {
            nome: "Padaria Mineirinha",
            endereco: "Rua dos Ipês, 150 - Belo Horizonte",
            contato: "(31) 3456-7890",
            descricao: "Pães de queijo e quitandas",
            ofertas: "Descontos em quitandas"
        },

        {
            nome: "Restaurante Sabor de Minas",
            endereco: "Avenida Brasil, 300 - Belo Horizonte",
            contato: "(31) 9876-1234",
            descricao: "Comida mineira e pratos vegetarianos",
            ofertas: "Promoções em refeições"
        },
    


    ],

    // SÃO PAULO
    "SP": [
        {
            nome: "Padaria Pão Quente",
            endereco: "Rua das Flores, 123 - São Paulo",
            contato: "(11) 1234-5678",
            descricao: "Pães artesanais e industriais",
            ofertas: "Descontos em pães e bolos"
        },

        {
            nome: "Restaurante Sabor Caseiro",
            endereco: "Avenida Central, 456 - São Paulo",
            contato: "(11) 9876-5432",
            descricao: "Pratos variados e opções veganas",
            ofertas: "Promoções em pratos do dia"
        },

        {
            nome: "Mercado Verde",
            endereco: "Rua das Palmeiras, 789 - São Paulo",
            contato: "(11) 2468-1357",
            descricao: "Alimentos com e sem lactose",
            ofertas: "Doações de alimentos"
        },

        {
            nome: "Dona Silmara",
            endereco: "Rua das Flores, 123 - São Paulo",
            contato: "(11) 1244-5557",
            descricao: "Produtos caseiros",
            ofertas: "Descontos em bolos de pote"
        }
    ],

    // RIO DE JANEIRO
    "RJ": [
        {
            nome: "Padaria Pão Dourado",
            endereco: "Rua das Acácias, 250 - Rio de Janeiro",
            contato: "(21) 2233-4455",
            descricao: "Pães, bolos e produtos artesanais",
            ofertas: "Descontos em pães"
        },

        {
            nome: "Restaurante Tempero Carioca",
            endereco: "Avenida Atlântica, 800 - Rio de Janeiro",
            contato: "(21) 9988-7766",
            descricao: "Comida caseira e pratos vegetarianos",
            ofertas: "Promoções no almoço"
        },

        {
            nome: "Mercado Boa Colheita",
            endereco: "Rua das Laranjeiras, 90 - Rio de Janeiro",
            contato: "(21) 3344-5566",
            descricao: "Frutas, verduras e produtos variados",
            ofertas: "Doações de frutas e verduras"
        },

        {
            nome: "Dona Helena",
            endereco: "Rua Copacabana, 120 - Rio de Janeiro",
            contato: "(21) 2255-6677",
            descricao: "Doces e receitas caseiras",
            ofertas: "Descontos em sobremesas"
        }
    ],

    // MINAS GERAIS
    "MG": [
        {
            nome: "Padaria Mineirinha",
            endereco: "Rua dos Ipês, 150 - Belo Horizonte",
            contato: "(31) 3456-7890",
            descricao: "Pães de queijo e quitandas",
            ofertas: "Descontos em quitandas"
        },

        {
            nome: "Restaurante Sabor de Minas",
            endereco: "Avenida Brasil, 300 - Belo Horizonte",
            contato: "(31) 9876-1234",
            descricao: "Comida mineira e pratos vegetarianos",
            ofertas: "Promoções em refeições"
        },

        {
            nome: "Mercado Natural",
            endereco: "Rua das Oliveiras, 450 - Belo Horizonte",
            contato: "(31) 2233-4455",
            descricao: "Produtos naturais e alimentos variados",
            ofertas: "Doações de frutas e legumes"
        },

        {
            nome: "Dona Maria",
            endereco: "Rua das Rosas, 200 - Belo Horizonte",
            contato: "(31) 9988-1122",
            descricao: "Bolos e doces artesanais",
            ofertas: "Descontos em bolos"
        }
    ]

};


// SELECIONAR ELEMENTOS HTML

const filtroEstados = document.getElementById("estados");

const linhas = document.querySelectorAll(
    "#lista-estabelecimentos tr"
);


// Atualiza as linhas da tabela de acordo com o estado

function atualizarTabela(estado) {

    const dados = estabelecimentos[estado] ?? estabelecimentos[""];

    linhas.forEach((linha, indice) => {

        // Se não houver estabelecimento correspondente,
        // oculta a linha para evitar erros.

        if (!estabelecimento) {
            linha.hidden = true;
            return;
        }

        linha.hidden = false;

        const celulas = linha.querySelectorAll("td");

        if (celulas.length < 5) {
            return;
        }

        celulas[0].textContent = estabelecimento.nome;
        celulas[1].textContent = estabelecimento.endereco;
        celulas[2].textContent = estabelecimento.contato;
        celulas[3].textContent = estabelecimento.descricao;
        celulas[4].textContent = estabelecimento.ofertas;

    });

}


// O evento só é registrado se o filtro existir nesta página.

if (filtroEstados) {

    filtroEstados.addEventListener("change", function () {

        const estadoSelecionado = filtroEstados.value;

        atualizarTabela(estadoSelecionado);

    });

    // Carrega os estabelecimentos do estado inicial.
    atualizarTabela(filtroEstados.value);

}

// ========================================
// EXCLUIR PRODUTOS- pagina perfil
// ========================================

document.addEventListener("click", function (evento) {

    const botao = evento.target.closest("[data-excluir]");

    if (!botao) {
        return;
    }

    const idProduto = botao.dataset.id;

    const produto = document.getElementById(idProduto);

    if (!produto) {
        return;
    }

    const confirmar = confirm(
        "Deseja realmente excluir este item?"
    );

    if (confirmar) {
        produto.remove();
    }

});
//EXPLICAÇÃO PERFIL: 1- a constante botoesExcluir pegará todos os seletores da
//O evento só procura botões com data-excluir. Isso evita que o botão Adicionar, que também utiliza a classe .btn-excluir, seja confundido com um botão de exclusão

//BOTÃO INTEGRANTES, Apos adição de id=aba-sofia aria control= ..integrantes
//Isso estabelece a relação entre a aba selecionada e o conteúdo apresentado.
const nomesAbas = [
    "aba-rafael",
    "aba-enrique",
    "aba-julio",
    "aba-sofia",
    "aba-marina"
];

const painel = document.getElementById("painel-integrante");

if (painel && nomesAbas[indice]) {
    painel.setAttribute("aria-labelledby", nomesAbas[indice]);
}