## Projeto guiado CRUD  com BD :rocket: 

Até então as APIs que foram feitas, não eram conectadas ao banco de dados. Nesse projeto vamos fazer a integração da nossa API com o Banco de Dados, usando o MongoDB :heart:  

### MongoDB

O que é MongoDB? 

É um banco de dados opensource, de alta performance e flexível, sendo considerado o principal banco de dados NoSQL. Os banco de dados NoSQL apresentam algumas vantagens sobre os outros tipos, principalmente quando precisamos de escalabilidade, flexibilidade, bom desempenho e facilidade para consultas.

O MongoDB é orientado a documentos, ou seja, os dados são armazenados como documentos, ao contrário de bancos de dados de modelo relacional, onde trabalhamos com registros em linhas e colunas. Os documentos podem ser descritos como dados no formato de chave-valor, no caso, utilizando o formato JSON (JavaScript Object Notation).

Organizações de todos os tamanhos estão usando o MongoDB pois ele permite que as empresas sejam mais ágeis e escaláveis, permitindo que os esquemas mudem rapidamente à medida que os aplicativos evoluem, sempre fornecendo as funcionalidades que os desenvolvedores esperam dos bancos de dados tradicionais.

Foi desenvolvido para oferecer escalabilidade, desempenho e alta disponibilidade, desde a implantação de um único servidor até grandes arquiteturas complexas de vários centros de dados. A replicação nativa do MongoDB e a tolerância automática a falhas oferecem confiabilidade e flexibilidade operacional em toda a empresa.

#### Mongoose

O mongoose é um módulo de node.js desenvolvido para se conectar ao MongoDB.

#### Conceito de Model (Schema)

Model ou Schema são os moldes que descrevem quais campos serão aceitos no seu banco de dados, podemos também definir informações de tipo de dados e fazer os "relacionamentos".

#### O que vamos usar?

| Ferramenta                   | Descrição                                                    |
| ---------------------------- | :----------------------------------------------------------- |
| `javascript`                 | Linguagem de programação                                     |
| `nodejs`                     | Ambiente de execução do javascript                           |
| `express`                    | Framework NodeJS                                             |
| `dotenv`                     | Dependência para proteger dados sensíveis do projeto         |
| `mongoose`                   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections |
| `nodemon`                    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente |
| `npm ou yarn`                | Gerenciador de pacotes                                       |
| `MongoDb`                    | Banco de dado não relacional orietado a documentos           |
| `MongoDb Compass ou Robo 3T` | Interface gráfica para verificar se os dados foram persistidos |
| `Insomnia ou Postman`        | Interface gráfica para realizar os testes                    |

#### Arquitetura MVC

Olha ela aí de novo! Esse projeto é todinho na arquitetura MVC, ou seja, cada pasta tem sua responsabilidade, exemplo: uma pasta para a lógica , para rotas, para models tudo bem separadinho :wink:

#### Regras de negócio :woman_technologist:

Primeiramente qual é o negócio? hehehe

Esse projeto é o FavMovies , que são divididos da seguinte forma:

Temos 4 estúdios: Marvel , Disney, Pixar e DreamWorks. E temos filmes armazenados em seus respectivos estúdios.

Requisitos:

### Estúdios e Títulos(filmes)

| Rotas                  | O que faz                                                    | Método |
| ---------------------- | ------------------------------------------------------------ | ------ |
| "/estudios"            | Retorna TODOS os estúdios cadastrados                        | GET    |
| "/estudios/pixar"      | Retorna somente o estúdio com filmes da Pixar                | GET    |
| "/estudios/disney"     | Retorna somente o estúdio com filmes da Disney               | GET    |
| "/estudios/dreamworks" | Retorna somente o estúdio com filmes da Dreamworks           | GET    |
| "/estudios/marvel"     | Retorna somente o estúdio com filmes da Marvel               | GET    |
| "/estudios/"           | Cria um novo estúdio                                         | POST   |
| "/estudios/:id"        | Altera alguma informação de um estúdio específico e retorna a informação alterada | PATCH  |
| "/estudios/:id"        | Deleta um estúdio de acordo com o ID                         | DELETE |
| "/titulos"             | Retorna TODOS os títulos (referenciando seus estúdios)       | GET    |

| Rotas          | O que faz                                                    | Método |
| -------------- | ------------------------------------------------------------ | ------ |
| "/titulos/:id" | Altera uma informação específica e retorna essa informação alterada | PATCH  |
| "/titulos/:id" | Deleta um título específico de acordo com o ID               | DELETE |

NÃO deverá ser possível criar um estúdio com o mesmo nome

NÃO deverá ser possível criar um título(filme) com o mesmo nome

Para criar um novo título , deverá vincular no momento da criação a um estúdio já existente no sistema, utilizando o número do id do estúdio correspondente no corpo da requisição.

#### Testando no Postman

Nesse JSON temos o exemplo da rota {GET} "/titulos/marvel"  , é mostrado todos os filmes cadastrados nesse estúdio com as seguintes informações: Data de criação, id (gerado automático), nome, gênero, descrição e a menção de qual estúdio esse filme foi cadastrado e se respectivo ID e data de criação.

`[
    {
        "criadoEm": "2021-08-07T19:11:47.603Z",
        "_id": "610edee34b71351004e3ece9",
        "nome": "The Avengers",
        "genero": "Action",
        "descricao": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "estudio": {
            "criadoEm": "2021-08-07T18:11:13.763Z",
            "_id": "610ecd5d520c8919b43196aa",
            "nome": "Marvel",
            "__v": 0
        },`



Nesse outro, temos a rota {GET} "/estudios", onde ele retorna todos os estúdios cadastrados no meu banco de dados, com as informações: data de criação, id (gerado automático), nome do estúdio.

`[
    {
        "criadoEm": "2021-08-07T16:53:08.371Z",
        "_id": "610ebb037a7c7a19489316bb",
        "nome": "Pixar",
        "__v": 0
    },
    {
        "criadoEm": "2021-08-07T18:11:13.763Z",
        "_id": "610ecd5d520c8919b43196aa",
        "nome": "Marvel",
        "__v": 0
    },
    {
        "criadoEm": "2021-08-07T18:50:56.456Z",
        "_id": "610ed931fdfa090820ecbcaa",
        "nome": "Disney",
        "__v": 0
    },
    {
        "criadoEm": "2021-08-23T20:24:43.038Z",
        "_id": "61240470abd99316189406cc",
        "nome": "DreamWorks",
        "__v": 0
    }
]`

#### Diário do projeto 

![Todo-poderoso-movie](https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/14848/580429e3ffd3264c1aed7a5a96785bf14ab7ad1e.gif?1549984493)

Esse foi um dos projetos que se deixasse eu estava até agora criando mais filmes para a base de dados! No começo eu achei que fosse uma missão impossível mas depois eu vi que eu só precisava lembrar dos baby steps que a mestre Jedi Simara sempre ensinou :heart: Olhando para esse projeto eu estou realmente orgulhosa ! Aqui vai meu super agradecimento a essa Profa maravilhosa que eu sou mega fã! Finalmente entendi a integração da API com o BD!! :fireworks: :fireworks: 

![thanos-estalando-dedos](https://c.tenor.com/gYqAFYmuE9YAAAAC/thanos-finger-snap.gif)

