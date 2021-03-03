// Capturando os campos de input
const titulo = document.getElementById("titulo-post");
const autor = document.getElementById("autor-post");
const conteudo = document.getElementById("conteudo-post");

// Criando uma variável para o container que receberá o post
const container = document.getElementById("container-de-post");

// Criando o objeto para guardar as informações do post
const posts = {
    tituloDoPost: titulo,
    autorDoPost: autor,
    conteudoDoPost: conteudo
}
