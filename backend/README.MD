# Digital Store
## Tecnologias 
Projeto backend é criado com:
* Node.js
* Express
* Sequelize
* JWT
## Descrição
Este projeto backend oferece Apis para gerenciar produtos e usuários.
## Inicializar
Para executar esse projeto, execute:

```
$ git clone https://github.com/gt-05/grupo-03.git
$ cd ./backend
$ npm install
$ npm run sync
$ npm run server
```

No arquivo .env configure de acordo com banco de dados, como:

```
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=1234
DB_NAME=store
```
## Estrutura do Projeto

```
├── src
│   ├── controllers    # Controladores para gerenciar a lógica das $rotas
│   ├── models         # Modelos do Sequelize
│   ├── routes         # Definições de rotas
│   ├── config         # Configurações (ex.: banco de dados)
│   └── middleware     # Middlewares personalizados
├── .env               # Arquivo de variáveis de ambiente
├── .env.example       # Exemplo de arquivo .env
├── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do projeto
```