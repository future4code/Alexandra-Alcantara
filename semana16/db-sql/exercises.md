# Cinema System

- Atrizes/Atores
  - Id;
  - Nome;
  - Salário;
  - Data de nascimento;
  - Gênero
    - Feminino;
    - Masculino.
- Filmes

  - Id;
  - Nome;
  - Sinopse;
  - Data de lançamento;
  - Avaliação (0 - 10).

- Ingressos

### Exercício 1

a)

`CREATE TABLE` é o comando para criar tabelas.

`PRIMARY KEY` é um indentificador único na tabela, cada inserção possuirá a sua própria chave.

`VARCHAR` indica um tipo de dado que pode conter strings e a quantidade entre parênteses indica o limite máximo de caracteres.

`DATE` representa uma data no formato YYYY-MM-DD.

`NOT NULL` indica que aquela informação não pode ser nula.

b)

O comando `SHOW DATABASES` retornou o nome do meu banco de dados.

Já o comando `SHOW TABLES` retornou o nome das minhas tabelas (Actor e professores_labenu).

c) O comando `DESCRIBE Actor` mostrou a estrutura da minha tabela, como o nome de identificação e os tipos de cada item, se podem ser nulos ou não e qual a `PRIMARY KEY`.

### Exercício 2

a)

`INSERT INTO` Actor (id, name, salary, birth_date, gender)<br>
`VALUES`(<br>
"001",<br>
"Tony Ramos",<br>
400000,<br>
"1948-08-25",<br>
"male"<br>
), (<br>
"002",<br>
"Glória Pires",<br>
1200000,<br>
"1963-08-23",<br>
"female"<br>
);

b)

    Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'

_Código do erro: 1062. Entrada duplicada '002' para a chave primária._<br>
O erro aconteceu porque já existe uma chave primária `002`, então caracteriza duplicidade e isso não pode acontecer.

c)

    Error Code: 1136. Column count doesn't match value count at row 1.

_Código do erro: A contagem de colunas não corresponde à contagem na linha 1._<br>
O erro aconteceu porque em VALUES foram indicadas 3 colunas (id, name e salary) e na atribuição de dados aparecem 5 itens.

Para que a inserção de dados seja realizada com sucesso, basta adicionar as duas colunas que faltam no final de VALUES:

`INSERT INTO` Actor (id, name, salary, birth_date, gender)<br>
`VALUES`(<br>
"003",<br>
"Fernanda Montenegro",<br>
300000,<br>
"1929-10-19",<br>
"female"<br>
);

d)

    Error Code: 1364. Field 'name' doesn't have a default value

_Código do erro: Campo `name` não possui um valor default._<br>
O erro aconteceu porque a coluna `name` não aparece em `VALUES` e não há um valor default para este item.

Para que a inserção de dados seja realizada com sucesso, basta adicionar `name` à `VALUES` e atribuir um valor para este item:

`INSERT INTO` Actor (id, name, salary, birth_date, gender)<br>
`VALUES`(<br>
"004",<br>
"Antonio Fagundes",<br>
400000,<br>
"1949-04-18",<br>
"male"<br>
);

e)

        Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.

_Valor incorreto para data: '1950' na coluna 'birth_date' na linha 1._<br>
O erro aconteceu porque a data foi informada sem as aspas.

Para que a inserção de dados seja realizada com sucesso, basta atribuir a data entre aspas:

`INSERT INTO` Actor (id, name, salary, birth_date, gender)<br>
`VALUES`(<br>
"005",<br>
"Juliana Paes",<br>
719333.33,<br>
"1979-03-26",<br>
"female"<br>
);

f)

`INSERT INTO` Actor (id, name, salary, birth_date, gender)<br>
`VALUES`(<br>
"006",<br>
"Adriana Esteves",<br>
900000,<br>
"1969-12-15",<br>
"female"<br>
), (<br>
"007",<br>
"Wagner Moura",<br>
800000,<br>
"1976-06-27",<br>
"male"<br>
);

### Exercício 3

a)

`SELECT * FROM` Actor<br>
`WHERE` gender = 'female';

b)

`SELECT` salary `FROM` Actor<br>
`WHERE` name = 'Tony Ramos';

c)

`SELECT * FROM` Actor<br>
`WHERE` gender = 'invalid';

A tabela retornou vazia, acredito que porque não houve nenhuma
inserção em que o gênero fosse 'invalid'.

d)

`SELECT` id, name, salary `FROM` Actor<br> `WHERE` salary <= 500000;

e)

    Error Code: 1054. Unknown column 'nome' in 'field list'

_Código do erro: 1054. Coluna 'nome' desconhecida na lista
de campos._<br>

Para que a seleção aconteça com sucesso, basta trocar 'nome' por 'name':

`SELECT` id, name `FROM` Actor<br>
`WHERE` id = "002";

### Exercício 4

a)

A query seleciona todas as colunas da tabela Actor aonde aparecem atores com nomes que começam com as letras A ou J e possuam salários acima de R$300.000,00.

b)

`SELECT * FROM` Actor<br>
`WHERE` name `NOT LIKE` "A%"<br>
`AND` salary > 350000;

c)

`SELECT * FROM` Actor<br>
`WHERE` name `LIKE` "%g%"<br>
`OR` name `LIKE` "%G%";

d)

`SELECT * FROM` Actor<br>
`WHERE` (name `LIKE` "%a%"<br>
`OR` name `LIKE` "%A%"<br>
`OR` name `LIKE` "%g%"<br>
`OR` name `LIKE` "%G%")<br>
`AND` salary `BETWEEN` 350000 `AND` 900000;

### Exercício 5

a)

| Field        | Type         | KEY         |
| ------------ | ------------ | ----------- |
| id           | VARCHAR(255) | PRIMARY KEY |
| name         | VARCHAR(255) | NOT NULL    |
| synopsis     | TEXT(500)    | NOT NULL    |
| release_date | DATE         | NOT NULL    |
| rating       | INT(10)      | NOT NULL    |

b)

c)

d)

### Exercício 6

### Exercício 7
