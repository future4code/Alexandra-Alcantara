CREATE TABLE users_address(
id VARCHAR(255) PRIMARY KEY,
cep VARCHAR(255) NOT NULL,
logradouro VARCHAR(255) NOT NULL,
numero VARCHAR(255) NOT NULL,
complemento VARCHAR(255),
bairro VARCHAR(255) NOT NULL,
cidade VARCHAR(255) NOT NULL,
estado VARCHAR(255) NOT NULL,
user_id VARCHAR(255),
FOREIGN KEY (user_id) REFERENCES users_auth_email_pwd(id)
);
