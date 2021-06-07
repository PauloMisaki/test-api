## Descrição

API do teste

## Instalação

```bash
$ yarn
```

## Rodando a aplicação

```bash
# dev
$ yarn start

# watch mode
$ yarn start:dev

```

## Rotas

Criação de Usuário :

    Rota : " POST http://localhost:3001/users

    Exemplo de retorno :

          Criado com sucesso
        {
          "name": "Paulo",
          "phone": "61986669392",
          "cpf": "934.952.342-68",
          "email": "ph.sorata@gmail.com",
          "status": "notValidated",
          "skills": ["Git"]
        }

Validação de Usuário : 

    Rota : " GET http://localhost:3001/users

    Exemplo de retorno :
        {
          "name": "Paulo",
          "phone": "61986669392",
          "cpf": "934.952.342-68",
          "email": "ph.sorata@gmail.com",
          "status": "validated",
          "skills": ["Git"]
        }

Lista de Usuários :

    Rota : " PATCH http://localhost:3001/users/[ID do Usuário]

    Exemplo de retorno :
        {
          "name": "Paulo",
          "phone": "11111111111",
          "cpf": "111.111.111-00",
          "email": "ph.sorata@gmail.com",
          "status": "notValidated",
        }

        {
          "name": "Henrique",
          "phone": "22222222222",
          "cpf": "222.222.222-00",
          "email": "hp.ataros@gmail.com",
          "status": "notValidated",
        }
