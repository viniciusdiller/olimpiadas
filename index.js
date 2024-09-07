let dados = [
    {
        titulo: "🥇Beatriz Souza",
        descricao: "Beatriz Souza é uma judoca brasileira que se destaca pela sua técnica e determinação. Com diversas medalhas em competições nacionais e internacionais, ela é uma das grandes promessas do judô brasileiro. Ganhou Medalha de ouro no judô.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tag: "judô, ouro, técnica, determinação, promessa, judo, mulher, mulheres, feminino, feminina, bia"
    },
    {
        titulo: "🥇Rebeca Andrade",
        descricao: "Rebeca Andrade é uma das maiores ginastas brasileiras de todos os tempos. Com sua força, elegância e determinação, ela conquistou a adoração dos brasileiros e se tornou um verdadeiro ícone do esporte nacional. Ganhou medalha de ouro (solo) e prata (individual geral e no salto) na ginástica artística.",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tag: "ginástica, ouro, prata, força, elegância, determinação, ginasta, ginastica , mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥇Duda e Ana Patrícia",
        descricao: "Duda e Ana Patrícia são uma das duplas de vôlei de praia mais bem-sucedidas do Brasil. Conquistaram diversos títulos importantes e representam o país com muita garra e determinação. A dupla ganhou medalha de ouro no Vôlei de praia.",
        link: "https://ge.globo.com/olimpiadas/noticia/2024/08/09/duda-e-ana-patricia-resgatam-tradicao-do-volei-de-praia-do-brasil-no-podio-das-olimpiadas.ghtml",
        tag: "vôlei de praia, ouro, dupla, determinação, títulos, volei de praia, mulher, mulheres, feminino, feminina, volei"
    },
    {
        titulo: "🥈Tati Weston-Webb",
        descricao: "Tati Weston-Webb é uma das principais surfistas brasileiras. Com sua habilidade e paixão pelo mar, ela conquistou diversos títulos internacionais e inspira novas gerações de surfistas. Ganhou medalha de prata no surfe.",
        link: "https://en.wikipedia.org/wiki/Tatiana_Weston-Webb",
        tag: "surfe, prata, paixão, títulos, inspiração, surf, mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥈Seleção Brasileira Feminina de Futebol",
        descricao: "A Seleção Brasileira Feminina é uma das principais forças do futebol feminino mundial. Com jogadoras talentosas e uma torcida apaixonada, a equipe busca sempre os melhores resultados nas competições internacionais. A equipe ganhou medalha de prata.",
        link: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Futebol_Feminino",
        tag: "futebol, prata, equipe, força, talento, seleçao, seleção, mulher, mulheres, feminino, feminina",
        integrantes: [
            { nome: "Formiga", link: "https://pt.wikipedia.org/wiki/Formiga_(futebolista)" },
            { nome: "Marta", link: "https://pt.wikipedia.org/wiki/Marta_(futebolista)" },
            { nome: "Andressa Alves", link: "https://pt.wikipedia.org/wiki/Andressa_Alves" },
            { nome: "Thaisa", link: "https://pt.wikipedia.org/wiki/Tha%C3%ADsa_Moreno" },
            { nome: "Bia Zaneratto", link: "https://pt.wikipedia.org/wiki/Bia_Zaneratto" },
            { nome: "Polyana", link: "https://pt.wikipedia.org/wiki/Poliana_(futebolista)" },
            { nome: "Luciana", link: "https://pt.wikipedia.org/wiki/Luciana_(futebolista)" },
            { nome: "Rafaelle", link: "https://pt.wikipedia.org/wiki/Rafaelle_Souza" },
            { nome: "Antônia", link: "https://pt.wikipedia.org/wiki/Ant%C3%B4nia_(futebolista)" },
            { nome: "Tamires", link: "https://pt.wikipedia.org/wiki/Tamires_(futebolista)" },
            { nome: "Bruninha", link: "https://pt.wikipedia.org/wiki/Bruninha" },
            { nome: "Ary Borges", link: "https://pt.wikipedia.org/wiki/Ary_Borges" },
            { nome: "Luana Bertolucci", link: "https://pt.wikipedia.org/wiki/Luana_Bertolucci" },
            { nome: "Aninha", link: "https://pt.wikipedia.org/wiki/Aninha_(futebolista)" },
            { nome: "Angelina", link: "https://pt.wikipedia.org/wiki/Angelina_(futebolista)" },
            { nome: "Debinha", link: "https://pt.wikipedia.org/wiki/Debinha" },
            { nome: "Geyse Ferreira", link: "https://pt.wikipedia.org/wiki/Geyse_Ferreira" },
            { nome: "Adriana", link: "https://pt.wikipedia.org/wiki/Adriana_(futebolista)" }
        ]
    },
    {
        titulo: "🥈Willian Lima",
        descricao: "Willian Lima é um atleta brasileiro que se destaca na modalidade de levantamento de peso. Com uma carreira notável e uma série de recordes pessoais, ele conquistou a medalha de prata no Campeonato Panamericano de Levantamento de Peso.",
        link: "https://pt.wikipedia.org/wiki/Willian_Lima",
        tag: "levantamento de peso, prata, recordes, Campeonato Panamericano, força, homem, homens, masculino"
    },
    {
        titulo: "🥈Caio Bonfim",
        descricao: "Caio Bonfim é um atleta brasileiro especializado em marcha atlética. Com uma carreira marcada por dedicação e resultados impressionantes, ele conquistou diversas medalhas em competições internacionais, incluindo medalha de ouro no Campeonato Mundial de Atletismo.",
        link: "https://pt.wikipedia.org/wiki/Caio_Bonfim",
        tag: "marcha atlética, prata, dedicação, resultados, Campeonato Mundial, homem, homens, masculino"
    },
    {
        titulo: "🥈Isaquias Queiroz",
        descricao: "Isaquias Queiroz é um renomado atleta brasileiro na canoagem. Com uma carreira brilhante, ele conquistou diversas medalhas em Jogos Pan-americanos e Mundiais, incluindo medalhas de bronze nas Olimpíadas de Tóquio.",
        link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
        tag: "canoagem, prata, Jogos Pan-americanos, Mundiais, Olimpíadas, homem, homens, masculino"
        },
    {
        titulo: "🥉Larissa Pimenta",
        descricao: "Larissa Pimenta é uma judoca brasileira de destaque. Com técnicas precisas e força, ela conquistou diversos títulos nacionais e internacionais, representando o Brasil com muita garra. Ganhou medalha de bronze no judô.",
        link: "https://pt.wikipedia.org/wiki/Larissa_Pimenta",
        tag: "judô, bronze, técnica, força, garra, judo, judoca, mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥉Bia Ferreira",
        descricao: "Bia Ferreira é uma boxeadora brasileira que vem se destacando no cenário internacional. Com golpes precisos e uma defesa sólida, ela é considerada uma das maiores promessas do boxe feminino. Ganhou medalha de bronze.",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Ferreira",
        tag: "boxe, bronze, defesa, golpes precisos, promessa, mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥉Rayssa Leal",
        descricao: "Rayssa Leal, a Fadinha, é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela já coleciona títulos e patrocinadores, sendo um dos maiores nomes do skate mundial.",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tag: "skate, bronze, talento, carisma, patrocinadores, mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥉Equipe Brasileira de Ginástica Artística Feminina",
        descricao: "A equipe brasileira de ginástica artística feminina é um dos destaques do esporte nacional. Com atletas talentosas e dedicadas, elas conquistaram diversos títulos importantes e inspiram novas gerações de ginastas.",
        link: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Gin%C3%A1stica_Art%C3%ADstica_Feminina",
        tag: "ginástica artística, bronze, equipe, talento, inspiração, ginastica,, mulher, mulheres, feminino, feminina, artistica ",
        integrantes: [
            {
                nome: "Rebeca Andrade",
                link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade"
            },
            {
                nome: "Flávia Saraiva",
                link: "https://pt.wikipedia.org/wiki/Fl%C3%A1via_Saraiva"
            },
            {
                nome: "Jade Barbosa",
                link: "https://pt.wikipedia.org/wiki/Jade_Barbosa"
            }
        ]

    },
    {
        titulo: "🥉Seleção Brasileira de Vôlei Feminino",
        descricao: "A Seleção Brasileira de Vôlei Feminino é uma potência mundial, com uma história rica em conquistas e uma torcida apaixonada. Com jogadoras talentosas e uma equipe técnica de excelência, a seleção busca sempre os melhores resultados nas competições internacionais.",
        link: "https://pt.wikipedia.org/wiki/Sele%C3%A7%C3%A3o_Brasileira_de_Voleibol_Feminino",
        tag: "vôlei, bronze, equipe, potência, conquistas, volei, seleçao, seleção, mulher, mulheres, feminino, feminina"
    },
    {
        titulo: "🥉Gabriel Medina",
        descricao: "Gabriel Medina é um surfista brasileiro conhecido por suas performances excepcionais em competições internacionais. Com uma carreira brilhante, ele conquistou a medalha de bronze nos Jogos Olímpicos de Tóquio.",
        link: "https://pt.wikipedia.org/wiki/Gabriel_Medina",
        tag: "surfe, bronze, Jogos Olímpicos, Tóquio, desempenho, surf, homem, homens, masculino"
    },
    {
        titulo: "🥉Augusto Akio",
        descricao: "Augusto Akio é um atleta brasileiro de esportes aquáticos, reconhecido por suas habilidades e dedicação. Ele conquistou a medalha de bronze no Campeonato Mundial de Natação.",
        link: "https://pt.wikipedia.org/wiki/Augusto_Akio",
        tag: "natação, bronze, Campeonato Mundial, habilidades, dedicação, nataçao, homem, homens, masculino"
    },
    {
        titulo: "🥉Edival Pontes 'Netinho'",
        descricao: "Edival Pontes, conhecido como 'Netinho', é um atleta brasileiro que se destaca no atletismo. Ele conquistou a medalha de bronze nos Jogos Pan-americanos, marcando uma grande conquista em sua carreira.",
        link: "https://pt.wikipedia.org/wiki/Edival_Pontes",
        tag: "atletismo, bronze, Jogos Pan-americanos, conquistas, dedicação, homem, homens, masculino"
    },
    {
        titulo: "🥉Alison dos Santos",
        descricao: "Alison dos Santos é um atleta brasileiro de atletismo, especialmente na modalidade de 400 metros com barreiras. Ele conquistou a medalha de bronze nas Olimpíadas de Tóquio com uma performance impressionante.",
        link: "https://pt.wikipedia.org/wiki/Alison_dos_Santos",
        tag: "atletismo, bronze, 400 metros com barreiras, Olimpíadas, Tóquio, homem, homens, masculino"
    },
    {
        titulo: "🥉Equipe de Judô - Equipes Mistas",
        descricao: "A equipe de Judô - Equipes Mistas é uma representação destacada do judô brasileiro nas Olimpíadas. Com uma combinação de atletas talentosos em diferentes categorias, a equipe conquistou a medalha de bronze, mostrando o alto nível e a força do judô brasileiro.",
        link: "https://cbj.com.br/pt/noticias/paris-2024--equipe-mista-do-brasil-e-bronze-nos-jogos-olimpicos-e-conquista-medalha-inedita/",
        tag: "equipe, judo, homem, homens, mulher, mulheres, feminino, masculino, ambos, mista",
        integrantes: [
            { nome: "Beatriz Souza", link: "https://pt.wikipedia.org/wiki/Beatriz_Souza" },
            { nome: "Rafaela Silva", link: "https://pt.wikipedia.org/wiki/Rafaela_Silva" },
            { nome: "Larissa Pimenta", link: "https://pt.wikipedia.org/wiki/Larissa_Pimenta" },
            { nome: "Ketleyn Quadros", link: "https://pt.wikipedia.org/wiki/Ketleyn_Quadros" },
            { nome: "Daniel Cargnin", link: "https://pt.wikipedia.org/wiki/Daniel_Cargnin_(judoca)" },
            { nome: "Rafael Macedo", link: "https://pt.wikipedia.org/wiki/Rafael_Macedo" },
            { nome: "Léo Gonçalves", link: "https://pt.wikipedia.org/wiki/Leonardo_Gon%C3%A7alves_(judoca)" },
            { nome: "Guilherme Schmidt", link: "https://pt.wikipedia.org/wiki/Guilherme_Schimidt" },
            { nome: "Rafael Silva", link: "https://pt.wikipedia.org/wiki/Rafael_Silva_(judoca)" },
            { nome: "Willian Lima", link: "https://pt.wikipedia.org/wiki/Willian_Lima" }
        ]
    }
];



