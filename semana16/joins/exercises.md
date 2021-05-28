# Cinema DB MySQL

<img src="./assets/images/cinema.jpg" width="100%" height="250">

## Requisitos

- Atrizes/Atores
  - Id;
  - Nome;
  - Data de nascimento;
  - Gênero
- Filmes

  - Id;
  - Nome;
  - Sinopse;
  - Data de lançamento;
  - Avaliação (0 - 10).

- Ingressos

### Exercício 1

a)

Chave estrangeira é a chave que faz referência a uma outra tabela.

b)

`CREATE TABLE` Rating (<br>
id `VARCHAR`(255) `PRIMARY KEY`,<br>
comment `TEXT NOT NULL`,<br>
rate `FLOAT NOT NULL`,<br>
movies_id `VARCHAR`(255),<br>
`FOREIGN KEY` (movies_id) `REFERENCES` Movies(id)
);

`INSERT INTO` Rating (id, comment, rate, movies_id)<br>
`VALUE`<br>
(001, "Excelente!", 9, "001"),<br>
(002, "Excelente!", 10, "002"),<br>
(003, "Excelente!", 7, "004");

c)

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114302-alexandra-alcantara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `Movies` (`id`))

Não foi possível criar a avaliação porque a foreign key não conseguiu acessar o id inexistente.

d)

`ALTER TABLE` Movies<br>
`DROP COLUMN` rating

A coluna foi excluída.

e)

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114302-alexandra-alcantara`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `Movies` (`id`))

Não foi possível apagar o filme com avaliação porque ele possui uma referência em outra tabela, primeiro é preciso apagar a referência.

### Exercício 2

a)

A tabela MovieCast foi criada com duas colunas, uma com o id do filme e outra com o id do ator, em que cada coluna possui uma chave estrangeira que referencia, respectivamente, o id do filme na tabela Movies e o id do ator na tabela Actor.

b)

`INSERT INTO` MovieCast(movie_id, actor_id)<br>
`VALUES`<br>
('001', '002'),<br>
('002', '002'),<br>
('003', '003'),<br>
('004', '004'),<br>
('005', '005'),<br>
('006', '006');

c)

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114302-alexandra-alcantara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não foi possível criar a relação porque a chave não identificou na tabela de atores o id informado na query.

d)

    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`cruz-2114302-alexandra-alcantara`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

O ator não pode ser deletado porque existe uma `FOREIGN KEY` associada a ele em outra tabela.

### Exercício 3

a)

O `JOIN` está unindo os itens correspondentes da tabela Rating/coluna `movie_id` com os da tabela Movie/coluna `id`.

O operador `ON` indica qual coluna da tabela Movie será usada como referência.

b)

`SELECT` name, Movies.id, Rating.rate from Movies
`INNER JOIN` Rating `ON` Movies.id = Rating.movies_id;

---

<img src="./assets/images/thats-all-folks.jpg" width="100%" height="250">
