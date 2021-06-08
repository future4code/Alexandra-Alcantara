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

### 3

a)

`as string` diz para o código que o virá de `process.env.JWT_KEY` será sempre uma string.

### 7

a)

É necessário usar o `as any` ou um type com o formato desejado para dizer ao código como a informação vai ser retornada.
