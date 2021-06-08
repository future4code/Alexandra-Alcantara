## Exercícios

### 1

a)

Acredito que guardar senhas em formato de string seja melhor porque mais caracteres podem ser utilizados, possibilitando senhas mais fortes.

### 2

a)

O código mostra a conexão com o banco e uma função para criar um usuário na tabela "user".

b)

`CREATE TABLE` users_auth(
id `VARCHAR(255)` `PRIMARY KEY`,
name `VARCHAR(255)` `NOT NULL`,
nickname `VARCHAR(255)` `NOT NULL`,
email `VARCHAR(50)` `UNIQUE` `NOT NULL`
);

`ALTER TABLE` users_auth
`ADD` password `VARCHAR(255)`

c)
