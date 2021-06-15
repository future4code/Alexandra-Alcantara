<h1 align="center">Cookenu</h1>

<p align="center">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=&logo=node-dot-js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00000F?style=&logo=mysql&logoColor=white" />
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=blue&style="/>
  <img src="http://img.shields.io/static/v1?label=Status&message=in-progress&color=yellow&style="/>

Project status: in progress 🚧:

### Table of Contents

:small_blue_diamond: [What is this project about?](#page_with_curl-what-is-this-project-about)

:small_blue_diamond: [Requirements](#hammer_and_wrench-requirements)

:small_blue_diamond: [How to run the application](#arrow_forward-how-to-run-the-application)

:small_blue_diamond: [Endpoints](#triangular_flag_on_post-endpoints)

- Sign up
- Login
- Reset password
- Get informations about the own profile
- Get informations about another user profile by id
- Follow users
- Unfollow users
- Get feed
- Add recipe
- Edit recipe
- Delete recipe
- Delete all recipes by user id
- Search recipe by id
- Delete user (only admin allowed)

:small_blue_diamond: [License](#license)

## :page_with_curl: What is this project about?

<p align="justify">
  This project is about an <strong>Application Programming Interface (API)</strong> developed to serve a social media, Cookenu, in which users can share relevant informations about food and recipes they had tried. It has all the most common functionalities in social medias.
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
<a href="https://www.npmjs.com/package/nodemailer">:small_blue_diamond: nodemailer</a>
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
        NODEMAILER_USER =
        NODEMAILER_PASSWORD =

4.  The file `tables.sql` has all tables used in this project if you want to create them easily.

    ```
    CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
    );
    ```

    ```
    CREATE TABLE recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
    );
    ```

    ```
    CREATE TABLE followers (
    follower_id VARCHAR(255) NOT NULL,
    followed_id VARCHAR(255) NOT NULL,
    following_since TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(follower_id, followed_id),
    FOREIGN KEY (follower_id) REFERENCES users (id),
    FOREIGN KEY (followed_id) REFERENCES users (id)
    );
    ```

5.  All set? Now you can choose a **client REST** as **Postman**, **Insomnia** or you can even test in your code editor - as I do -, in Visual Studio Code you can install an extension called **REST Client** and use the file `requests.rest` in this project to test all endpoints.

6.  Run `npm run start` in your command line and go to your client REST to see the magic happening!

## :triangular_flag_on_post: Endpoints

### :metal: Users

:ballot_box_with_check: Sign up<br>
**Method:** POST<br>
**Path:** `/signup`

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
  "access_token": "access token"
}
```

:ballot_box_with_check: Login<br>
**Method:** POST<br>
**Path:** `/login`

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
  "access_token": "access token"
}
```

:ballot_box_with_check: Reset password<br>
**Method:** POST<br>
**Path:** `/user/password/reset`

**Input**

Body

```json
{
  "email": "hulk-smash@avengers.com"
}
```

:ballot_box_with_check: Get informations about the own profile<br>
**Method:** GET<br>
**Path:** `/user/profile`

**Input**

Headers

```
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "id": "user id",
  "name": "Hulk",
  "email": "hulk-smash@avengers.com"
}
```

:ballot_box_with_check: Get informations about another user profile by id

**Method:** GET<br>
**Path:** `/user/:id`

**Input**

Path Param

```json
id: "user id"
```

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "id": "user id",
  "name": "Hulk",
  "email": "hulk-smash@avengers.com"
}
```

:ballot_box_with_check: Follow users<br>
**Method:** POST<br>
**Path:** `/user/follow`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "followed_id": "user id to follow"
}
```

**Output**

Body

```json
{
  "message": "Followed successfully"
}
```

:ballot_box_with_check: Unfollow users<br>
**Method:** POST<br>
**Path:** `/user/unfollow`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "followed_id": "user id to unfollow"
}
```

**Output**

Body

```json
{
  "message": "Unfollowed successfully"
}
```

### :cake: Recipes

:ballot_box_with_check: Get feed<br>
**Method:** GET<br>
**Path:** `/user/feed`

**Input**

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "recipes": [
    {
      "id": "id da receita",
      "title": "título da receita",
      "description": "descrição da receita",
      "createdAt": "31/12/2020",
      "userId": "id do usuário que criou a receita",
      "userName": "nome do usuário que criou a receita"
    }
  ]
}
```

:ballot_box_with_check: Add recipe<br>
**Method:** POST<br>
**Path:** `/recipe`

**Input**

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "title": "recipe title",
  "description": "recipe description"
}
```

**Output**

Body

```json
{
  "message": "Recipe added successfully!"
}
```

:ballot_box_with_check: Edit recipe<br>
**Method:** POST<br>
**Path:** `/recipe/edit/:id`

**Input**

Path Param

```json
id: "recipe id"
```

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "title": "new recipe title",
  "description": "new recipe description"
}
```

**Output**

Body

```json
{
  "message": "Recipe edited successfully!"
}
```

:ballot_box_with_check: Delete recipe<br>
**Method:** DELETE<br>
**Path:** `/recipe/delete/:id`

**Input**

Path Param

```json
id: "recipe id"
```

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "message": "Recipe deleted successfully!"
}
```

:ballot_box_with_check: Delete all recipes by user id<br>
**Method:** DELETE<br>
**Path:** `/recipes/delete/all/user/:id`

**Input**

Path Param

```json
id: "user id"
```

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "message": "All recipes deleted successfully!"
}
```

:ballot_box_with_check: Search recipe by id<br>
**Method:** GET<br>
**Path:** `/recipe/:id`

**Input**

Path Param

```json
id: "recipe id"
```

Headers

```json
Authorization: "authentication token"
```

**Output**

Body

```json
{
  "id": "recipe id",
  "title": "Smash soup by Hulk",
  "description": "Smaaaaaash",
  "cratedAt": "13/06/2021"
}
```

### :closed_lock_with_key: Admin

:ballot_box_with_check: Delete user (only admin allowed)<br>
**Method:** DELETE<br>
**Path:** `/admin/delete/user/:id`

**Input**

Path Param

```json
id: "user id"
```

Headers

```json
Authorization: "authentication token"
```

Body

```json
{
  "message": "User deleted successfully!"
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

Copyright :copyright: 2021 - Cookenu
