# Cinema DB MySQL

<img src="images/cinema.jpg" width="100%" height="250">
<br>

## Requisitos

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

## Exercícios

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
| synopsis     | TEXT         | NOT NULL    |
| release_date | DATE         | NOT NULL    |
| rating       | INT(2)       | NOT NULL    |

<br>

Criei a tabela `Movies` com os campos requeridos e com os tipos `VARCHAR` para id e name, `TEXT` para a synopsis, `DATE` para a data de lançamento e `INT` para rating com 2 caracteres, pois a avaliação será de no máximo 10.
O Id é a Primary Key e os outros itens são obrigatórios.

b)

`INSERT INTO` Movies (id, name, synopsis, release_date, rating)<br>
`VALUES`(<br>
"001",<br>
"Se Eu Fosse Você",<br>
"Cláudio e Helena são casados há muitos anos e enfrentam
a rotina do casamento. Um dia eles são atingidos por um
fenômeno inexplicável e trocam de corpos.",<br>
"2006-01-06",<br>
7<br>
);

c)

`INSERT INTO` Movies (id, name, synopsis, release_date, rating)<br>
`VALUES`(<br>
"002",<br>
"Doce de mãe",<br>
"Dona Picucha, uma animada senhora de 85 anos, sempre
causa grandes confusões. A vida dela e dos seus quatro
filhos sofre uma reviravolta depois que Zaida, empregada
e amiga de Dona Picucha, anuncia que vai se casar e não
poderá mais morar com ela.",<br>
"2012-12-27",<br>
10<br>
);

d)

`INSERT INTO` Movies (id, name, synopsis, release_date, rating)<br>
`VALUES`(<br>
"003",<br>
"Dona Flor e Seus Dois Maridos",<br>
"Dona Flor é uma sedutora professora de culinária casada
com Vadinho, que só quer saber de farras e jogatina nas
boates. A vida de abusos acaba por acarretar sua morte
precoce.",<br>
"2017-11-02",<br>
8<br>
);

e)

`INSERT INTO` Movies (id, name, synopsis, release_date, rating)<br>
`VALUES`(<br>
"004",<br>
"Tropa de Elite",<br>
"Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é
designado para chefiar uma das equipes que tem como missão
apaziguar o Morro do Turano. Ele precisa cumprir as ordens
enquanto procura por um substituto para ficar em seu lugar.
Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e
Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar
em ação e impressionados com a eficiência de seus salvadores,
os dois se candidatam ao curso de formação da Tropa de Elite.",<br>
"2007-10-05",<br>
10<br>
);

### Exercício 6

a)

`SELECT` id, name, rating `FROM` Movies<br>

b)

`SELECT * FROM` Movies<br>
`WHERE` name = "Tropa de Elite";

c)

`SELECT` id, name, synopsis `FROM` Movies<br>
`WHERE` rating >= 7;

### Exercício 7

a)

`SELECT * FROM` Movies<br>
`WHERE` name `LIKE` "%vida%";

b)

`SELECT * FROM` Movies<br>
`WHERE` name `LIKE` "%dia%"<br>
`OR` synopsis `LIKE` "%dia%";

c)

`SELECT * FROM` Movies<br>
`WHERE` release_date <= `CURDATE()`;

d)

`SELECT * FROM` Movies<br>
`WHERE` (release_date <= `CURDATE()`<br>
`AND` name `LIKE` "%tropa%"<br>
`OR` synopsis `LIKE` "%tropa%")<br>
`AND` rating > 7;

---

<img src="images/thats-all-folks.jpg" width="100%" height="250">
