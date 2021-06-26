<h1 align="center">Labook</h1>

<p align="center">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=&logo=node-dot-js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=&logo=mysql&logoColor=white" />
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=blue&style="/>
  <img src="http://img.shields.io/static/v1?label=Status&message=in-progress&color=yellow&style="/>

Project status: in progress 🚧

### Table of Contents

:small_blue_diamond: [What is this project about?](#page_with_curl-what-is-this-project-about)

:small_blue_diamond: [Requirements](#hammer_and_wrench-requirements)

:small_blue_diamond: [How to run the application](#arrow_forward-how-to-run-the-application)

:small_blue_diamond: [Endpoints](#triangular_flag_on_post-endpoints)

- Sign up
- Login
- Create Post
- Get post by id
- Make friends
- Undo friendship
- Get feed

:small_blue_diamond: [License](#license)

## :page_with_curl: What is this project about?

<p align="justify">
  This project is about an <strong>Application Programming Interface (API)</strong> developed to serve a social media, Labook, in which users can share normal posts or events. It has all the most common functionalities in social medias.
</p>

## :hammer_and_wrench: Requirements

#### Runtime environment

<a href="https://nodejs.org/en/">:small_blue_diamond: NodeJS</a>

#### Language

<a href="https://www.typescriptlang.org/
">:small_blue_diamond: Typescript</a>

#### Database Service (you can use another one)

<a href="https://www.mysql.com/">:small_blue_diamond: MySQL</a>

#### Framework

<a href="https://expressjs.com/pt-br/">:small_blue_diamond: Express.js</a>

#### Libraries

<a href="http://knexjs.org/">:small_blue_diamond: Knex.js</a>
<a href="https://www.npmjs.com/package/bcryptjs">:small_blue_diamond: bcryptjs</a>
<a href="https://www.npmjs.com/package/cors">:small_blue_diamond: cors</a>
<a href="https://www.npmjs.com/package/dotenv">:small_blue_diamond: dotenv</a>
<a href="https://www.npmjs.com/package/jsonwebtoken">:small_blue_diamond: jsonwebtoken</a>
<a href="https://www.npmjs.com/package/uuid">:small_blue_diamond: uuid</a>

## :arrow_forward: How to run the application

1.  Clone this repository in your machine.

2.  In your command line, run:

    `npm install`

3.  The file `.env.sample` is used for setting up all environment variables you'll need, as the informations about your **database**, a **jwt key** (any keyword you want), in **nodemailer_user** comes your email (some email just for testing, preferably) and its password in **nodemailer_password**, remember to rename this file just as `.env` (not obligatory, but... you know, keep it simple):

        DB_HOST =
        DB_USER =
        DB_PASSWORD =
        DB_SCHEMA =
        JWT_KEY =

4.  The file `tables.sql` has all tables used in this project if you want to create them easily.

```
CREATE TABLE users_labook (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
);
```

```
CREATE TABLE posts_labook(
id VARCHAR(255) PRIMARY KEY,
photo VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
type ENUM("normal","event") DEFAULT "normal",
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
author_id VARCHAR(255),
FOREIGN KEY (author_id) REFERENCES users_labook (id)
);
```

```
CREATE TABLE friendship_labook (
sender_request_id VARCHAR(255) NOT NULL,
recipient_request_id VARCHAR(255) NOT NULL,
friendship_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(sender_request_id, recipient_request_id),
FOREIGN KEY (sender_request_id) REFERENCES users_labook (id),
FOREIGN KEY (recipient_request_id) REFERENCES users_labook (id)
);
```

5.  All set? Now you can choose a **client REST** as **Postman**, **Insomnia** or you can even test in your code editor - as I do -, in Visual Studio Code you can install an extension called **REST Client** and use the file `requests.rest` in this project to test all endpoints.

6.  Run `npm run start` in your command line and go to your client REST to see the magic happening!

## :triangular_flag_on_post: Endpoints

### :metal: User access

:ballot_box_with_check: Sign up<br>
**Method:** POST<br>
**Path:** `/users/signup`

**Input**

Body

```json
{
  "name": "Hulk",
  "email": "hulk-smash@avengers.com",
  "password": "123456"
}
```

**Output**

Body

```json
{
  "message": "User created!",
  "token": "token"
}
```

:ballot_box_with_check: Login<br>
**Method:** POST<br>
**Path:** `/users/login`

**Input**

Body

```json
{
  "email": "hulk-smash@avengers.com",
  "password": "123456"
}
```

**Output**

Body

```json
{
  "message": "You're on!",
  "access_token": "access token"
}
}
```

### :two_hearts: Friendship

:ballot_box_with_check: Make friends<br>
**Method:** POST<br>
**Path:** `/friendship/make`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "recipient_request_id": "id"
}
```

**Output**

Body

```json
{
  "message": "Now you're friends!"
}
```

:ballot_box_with_check: Undo friendship<br>
**Method:** DELETE<br>
**Path:** `/friendship/undo`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "recipient_request_id": "id"
}
```

**Output**

Body

```json
{
  "message": "Friendship is gone :/"
}
```

### :newspaper: Posts

:ballot_box_with_check: Get feed<br>
**Method:** GET<br>
**Path:** `/feed`

**Input**

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "posts": [
    {
      "id": "id",
      "authorName": "Hulk",
      "photo": "https://mulhercasadaviaja.files.wordpress.com/2018/02/hallstatt-16.jpg",
      "description": "Hallstatt <3",
      "type": "normal",
      "createdAt": "20/06/2021",
      "authorId": "authorId"
    }
  ]
}
```

:ballot_box_with_check: Create post<br>
**Method:** POST<br>
**Path:** `/posts/create`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "photo": "https://cdn2.civitatis.com/polonia/cracovia/guia/campo-concentracion-auschwitz.jpg",
  "description": "Auschwitz :(",
  "type": "normal"
}
```

**Output**

Body

```json
{
  "message": "Post created!",
  "post": {
    "id": "569e80f5-8cea-424e-9029-85bfd51e74a3",
    "photo": "https://cdn2.civitatis.com/polonia/cracovia/guia/campo-concentracion-auschwitz.jpg",
    "description": "Auschwitz :(",
    "type": "normal",
    "author_id": "a2d34cab-97e3-482e-ba97-47e63d53bf11"
  }
}
```

:ballot_box_with_check: Get post by id<br>
**Method:** GET<br>
**Path:** `/posts/:id`

**Input**

Path Param

```json
id: "post id"
```

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "id": "id",
  "photo": "https://maladeaventuras.com/wp-content/uploads/2020/03/melhores-hoteis-interlaken-2.jpg",
  "description": "Interlaken <3",
  "type": "normal",
  "createdAt": "19/06/2021",
  "authorId": "authorId"
}
```

## :rocket: Developer :octocat:

<table>
  <tr>
    <td align="center"><a href="https://github.com/alexa2me">
    <img src="https://avatars.githubusercontent.com/u/63327969?s=460&v=4" width="100px" alt="Imagem do perfil da Alexandra"/>
    <br />
    <sub><b>Alexandra Alcantara</b></sub><br />:snowflake::snowman::snowflake:</td>

</table>

## License

The [MIT License](https://choosealicense.com/licenses/mit/) (MIT)

Copyright :copyright: 2021 - Labook

```

```
