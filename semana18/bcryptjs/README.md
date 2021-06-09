## Exercícios

### 1

a)

Salt é uma string aleatória misturada à senha antes do hash para torná-la mais segura e round é uma forma de tornar o algoritmo mais lento para dificultar ataques de força bruta. O valor padrão do round/cost da maioria das libs é 12 e eu usei 12 também porque acredito que seja o suficiente para manter o algoritmo seguro e não tão lento.

### 2

a)

Primeiro deve ser modificado o endpoint de cadastro e só então o login, pois no cadastro a senha será salva já criptografada e no login será possível fazer a comparação do hash que está no banco com a senha enviada pelo usuário.

d)

Acredito que o endpoint user/profile não precise ser atualizado porque ele leva em consideração somente o token da sessão e não a senha criptografada.
