/*AIRBUS*/
db.avioes.insertMany([
    {
        "fabricante": "Airbus",
        "modelo": "A320",
        "ano": "2015",
        "descricao": "Airbus A320 é uma família de aeronaves de fuselagem estreita bimotoras turbofan, desenvolvidas e fabricadas pela Airbus. São oferecidas pela fabricante as variantes A318, A319, A320 e A321, além a gama de aeronaves executivas.A montagem final dos aviões é feita em Toulouse, na França, e Hamburgo, na Alemanha."
    },
    {
        "fabricante": "Airbus",
        "modelo": "A330",
        "ano": "2008",
        "descricao": "O Airbus A330 é um avião widebody bimotor turbofan, desenvolvido e fabricado pela Airbus. As versões têm um alcance de 5 000 km (2 700 m.n.) a 13 000 km (7 020 m.n.) e podem levar até 335 passageiros com uma configuração de duas classes, ou transportar até 70 toneladas (154 000 libras) de carga."
    },
    {
        "fabricante": "Airbus",
        "modelo": "A350",
        "ano": "2014",
        "descricao": "O Airbus A350 XWB é uma aeronave widebody bimotor turbofan, desenvolvida e fabricada pela Airbus. O A350 é a primeira aeronave fabricada pela Airbus com fuselagem e asas feitas principalmente com fibra de carbono e polímero.[6] Tem uma capacidade máxima entre 280 e 366 passageiros.[7] O A350 foi desenvolvido para substituir os Airbus A340, quadrimotores que pararam de ser produzidos em 2011, e competir com o Boeing 787 Dreamliner embora não seja tão revolucionário quanto o modelo norte-americano."
    },
    {
        "fabricante": "Airbus",
        "modelo": "A380",
        "ano": "2005",
        "descricao": "O Airbus A380 é uma aeronave widebody quadrimotor a jato para o transporte de passageiros, fabricado pela EADS Airbus. É o maior avião comercial do mundo. Os aeroportos em que opera tiveram suas instalações adaptadas para acomodá-lo com segurança. Inicialmente foi chamado de Airbus A3XX e projetado para desafiar o monopólio da Boeing no mercado de grandes aeronaves. O A380 fez seu primeiro voo em 27 de abril de 2005 e entrou em serviço comercial em outubro de 2007, com a Singapore Airlines."
    }
])

/*BOEING*/
db.avioes.insertMany([
    {
        "fabricante": "Boeing",
        "modelo": "767",
        "ano": "1990",
        "descricao": "Boeing 767 é uma aeronave widebody bimotor turbofan desenvolvida e fabricada pela Boeing. Foi o primeiro avião bimotor widebody (corredor duplo) e equipado com glass cockpit (painéis totalmente digitais) da Boeing. Projetado como um avião menor e mais econômico que o Boeing 747 para ser utilizado em rotas internacionais médias e longas, possui capacidade de 181 a 375 passageiros, divididos de 1 a 3 classes, com um alcance de 3 850 a 6 385 milhas náuticas (7 130 a 11 825 quilômetros). O avião foi desenvolvido juntamente com o Boeing 757, que atuaria em rotas nacionais e internacionais curtas."
    },
    {
        "fabricante": "Boeing",
        "modelo": "777",
        "ano": "1995",
        "descricao": "O Boeing 777 também chamado de Boeing Triplo Sete (em inglês: Triple Seven) é uma aeronave widebody bimotor turbofan desenvolvida e fabricada pela Boeing. É a maior aeronave bimotora do mundo, com capacidade de 314 a 550 passageiros, divididos de 1 a 3 classes, com um alcance de 5 235 a 9 380 milhas náuticas (9 695 a 17 372 quilómetros). Comumente referido como o Triple Seven, as suas características incluem o maior motor turbofan do mundo, seis rodas em cada trem de pouso principal, secção transversal da fuselagem totalmente circular, e um cone de cauda em formato de lâmina."
    },
    {
        "fabricante": "Boeing",
        "modelo": "787",
        "ano": "2005",
        "descricao": "O Boeing 787 Dreamliner é uma aeronave widebody bimotor turbofan desenvolvida e fabricada pela Boeing. Sua capacidade de passageiros varia de 242 a 335 passageiros. É a aeronave mais eficiente da Boeing em termos de combustível e foi a primeira na qual foram usados compósitos como material principal na construção de sua estrutura. O 787 foi projetado para ser 20% mais eficiente do que o Boeing 767. As características do 787 incluem seu nariz distintivo, o uso total do sistema fly-by-wire, asas curvadas, e redução de ruído dos motores."
    },
    {
        "fabricante": "Boeing",
        "modelo": "747",
        "ano": "1990",
        "descricao": "Boeing 747-8 é uma aeronave widebody quadrimotor desenvolvida pela Boeing. Anunciado oficialmente em 2005, o 747-8 é a terceira geração de Boeing 747, com fuselagem alongada, asas redesenhadas e melhor eficiência. O 747-8 é a maior versão do Boeing 747, maior avião comercial construído nos Estados Unidos, e o avião comercial mais longo do mundo, juntamente com o Airbus A340-600."
    }
])

db.empresa_aerea.insertMany([
    {"nome":"Azul Linhas Aereas"}, {"nome":"Gol"}, {"nome":"Latam"}, {"nome":"Atlas Air"}
])

db.frota.insertMany([
    {"id_avião":"ObjectId("638430e16bf790775d373e7c")", "id_empresa":"ObjectId("6384c7d52fc121f1ad987917")"},
    {"id_avião":"ObjectId("638430e16bf790775d373e7d")", "id_empresa":"ObjectId("6384c7d52fc121f1ad987918")"}

])

/*/db.empresa_aerea.insertMany([
//    {"nome":"Azul Linhas Aereas",
//        "":""
//    }, 
//    {"nome":"Gol"}, 
//    {"nome":"Latam"}, 
//    {"nome":"Atlas Air"}
//])*/