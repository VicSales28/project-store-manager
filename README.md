# Store Manager 🛍️

This project was developed while I was studying 'Software Architecture: Model, Service and Controller' at Trybe Programming School.

In this project I developed an application for sales management. By using it, it's possible to create, view, update, and delete products and sales.

Regular deadline: June 12, 2023 at 2:00 pm


<details>
  <summary><strong>🏗 Project structure</strong></summary><br />

The files created by me are in `project-store-manager/backend/src/`:

- In the folder  📁`controllers` there are the files responsible for receiving all user requests and controlling what will be shown to the user.
- In the folder  📁`services` there are the files responsible for doing the business rules.
- In the folder  📁`model` there are the files responsible for connect to the database.
- In the folder  📁`routers` there are the files responsible for defining routes.
- In the folder  📁`middlewares` there are the files responsible for the validations.
- In the folder  📁`utils` there are the files with auxiliary functions.
- In the folder  📁`tests/unit` there are the files with the tests of each function.

The created endpoints are:
- GET /products
- GET /products/:id
- GET /sales
- GET /sales/:id
- POST /products
- POST /sales
- PUT /products/:id
- DELETE /products/:id
- DELETE /sales/:id
- GET /products/search
- PUT /:saleId/products/:productId/quantity

</details>

<details>
  <summary><strong>🔎 Linter</strong></summary><br />

To ensure code quality, the `ESLint` and `Stylelint` linters were used in this project.

ESLint is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code. In many ways it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely 'pluggable', each of the rules is a plugin and you can add […]

To run them locally, run the commands below:
`npm run lint`
`npm run lint:styles`

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git clone git@github.com:VicSales28/project-store-manager.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

<details>
  <summary><strong>Initialization</strong></summary><br />
  
Quickstart with Docker Compose 🐳

```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d
```

or

Quickstart without Docker Compose

```bash
# Instale as dependências
npm install

# Inicie apenas o serviço `db` no compose
docker-compose up -d db

# Inicie a aplicação em modo de desenvolvimento
npm run dev:local
```
</details>

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>

