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

    Rota : " http://localhost:3000/[NomeDoColaborador]/registrar

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

Validação de Usuário : [INCOMPLETA]

    Rota : " http://localhost:3000/[NomeDoColaborador]/validar

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

    Rota : " http://localhost:3000/registros

    Exemplo de retorno :
        {
          "name": "Paulo",
          "email": "ph.sorata@gmail.com",
          "status": "notValidated",
        }

        {
          "name": "Henrique",
          "email": "hp.ataros@gmail.com",
          "status": "notValidated",
        }
