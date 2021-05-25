# Cinema DB MySQL

<img src="images/cinema.jpg" width="100%" height="250">

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
  - Data limite em cartaz;
  - Avaliação (0 - 10).

- Ingressos

### Exercício 1

a)

`ALTER TABLE` + `DROP COLUMN` serve para remover colunas, nesse caso a coluna 'salary' seria removida.

b)

`ALTER TABLE` + `CHANGE` serve para alterar colunas, nesse caso a coluna 'gender' teria o nome alterado para 'sex'.

c)

Nesse exemplo a coluna não muda de nome, mas sim a quantidade de caracteres do `VARCHAR` para 255.

d)

`ALTER TABLE` Actor
`CHANGE` gender gender `VARCHAR`(100);

### Exercício 2

a)

`UPDATE` Actor<br>
`SET` name = "Fernanda Montinho", birth_date = "1990/02/27"<br>
`WHERE` id = "003";

b)

`UPDATE` Actor<br>
`SET` name = "JULIANA PAES"<br>
`WHERE` name = "Juliana Paes";

`UPDATE` Actor<br>
`SET` name = "Juliana Paes"<br>
`WHERE` name = "JULIANA PAES";

c)

`UPDATE` Actor<br>
`SET`<br>
name = "Vladimir Brichta",<br>
birth_date = "1976/03/22",<br>
salary = 5000000,<br>
gender = "male"<br>
`WHERE` id = "005";

d)

`UPDATE` Actor<br>
`SET` address = "03 Street"<br>
`WHERE` id = "010";

Ocorreram 2 situações, se eu tentar atualizar uma coluna que
existe com um 'id' inválido, a operação acontece, mas nada é
alterado na tabela, mas se eu tentar atualizar uma coluna que
não existe, daí vem o erro abaixo por causa da inexistência da
coluna.

    Error Code: 1054. Unknown column 'address' in 'field list'

### Exercício 3

a)

`DELETE FROM` Actor<br>
`WHERE` name = "Fernanda Montenegro";

b)

`DELETE FROM` Actor<br>
`WHERE` gender = "male"<br>
`AND` salary > 1000000;

### Exercício 4

a)

`SELECT MAX`(salary) `AS` "higher_salary"<br>
`FROM` Actor;

b)

`SELECT MIN`(salary) `AS` "lower_salary"<br>
`FROM` Actor<br>
`WHERE` gender = "female";

c)

`SELECT COUNT`(\*) `AS` "Qtd_atrizes"<br>
`FROM` Actor<br>
`WHERE` gender = "female";

d)

`SELECT SUM`(salary) `AS` "sum_salary"<br>
`FROM` Actor;

### Exercício 5

a)

`SELECT COUNT`(\*), gender<br>
`FROM` Actor<br>
`GROUP BY` gender;

A query retornou uma tabela com a quantidade de atrizes e
atores agrupados por gênero.

b)

`SELECT` id, name<br>
`FROM` Actor<br>
`ORDER BY` name `DESC`;

c)

`SELECT * FROM` Actor<br>
`ORDER BY` salary;

d)

`SELECT * FROM` Actor<br>
`ORDER BY` salary `DESC`<br>
`LIMIT` 3;

e)

`SELECT AVG`(salary), gender<br>
`FROM` Actor<br>
`GROUP BY` gender;

### Exercício 6

a)

`ALTER TABLE` Movies<br>
`ADD` playing_limit_date `DATE`;

b)

`ALTER TABLE` Movies<br>
`CHANGE` rating rating `FLOAT`;

c)

Ainda em cartaz<br>
`UPDATE` Movies<br>
`SET` playing_limit_date = "2021-05-30"<br>
`WHERE` id = "001";

Fora de cartaz<br>
`UPDATE` Movies<br>
`SET` playing_limit_date = "2021-01-30"<br>
`WHERE` id = "002";

d)

`DELETE FROM` Movies<br>
`WHERE` id = "003"<br>

`UPDATE` Movies<br>
`SET` synopsis = 'Teste de atualização de sinopse em id removido'<br>
`WHERE`
id = '003';

Após tentar atualizar dados de um id removido, não acontece erro e nada é alterado.

### Exercício 7

a)

`SELECT COUNT`(\*)<br>
`FROM` Movies<br>
`WHERE` playing_limit_date >= `CURRENT_DATE()` <br>
`AND` rating > 7.5;

b)

`SELECT AVG`(rating)<br>
`FROM` Movies;

c)

`SELECT COUNT`(\*)<br>
`FROM` Movies<br>
`WHERE` playing_limit_date >= `CURRENT_DATE()`;

d)

`SELECT COUNT`(\*)<br>
`FROM` Movies<br>
`WHERE` release_date > `CURRENT_DATE()`;

e)

`SELECT MAX`(rating)<br>
`FROM` Movies;

f)

`SELECT MIN`(rating)<br>
`FROM` Movies;

### Exercício 8

a)

`SELECT * FROM` Movies<br>
`ORDER BY` name `ASC`;

b)

`SELECT * FROM` Movies<br>
`ORDER BY` name `DESC`<br>
`LIMIT` 5;

c)

`SELECT * FROM` Movies<br>
`WHERE` release_date < `CURDATE()`<br>
`ORDER BY` release_date `DESC`<br>
`LIMIT` 3;

d)

`SELECT * FROM` Movies<br>
`ORDER BY` rating `DESC`<br>
`LIMIT` 3;

---

<img src="images/thats-all-folks.jpg" width="100%" height="250">
