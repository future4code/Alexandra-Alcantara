// Capturando os campos de input
const titulo = document.getElementById("titulo-post");
const autor = document.getElementById("autor-post");
const conteudo = document.getElementById("conteudo-post");

// Criando uma variável para o container que receberá o post
const container = document.getElementById("container-de-posts");

// Criando o objeto para guardar as informações do post
const arrayDePosts = [];

function criarPost() {
    const post = {
        tituloDoPost: titulo.value,
        autorDoPost: autor.value,
        conteudoDoPost: conteudo.value
    }

    if (post.tituloDoPost != "" && post.autorDoPost != "" && post.conteudoDoPost != "") {
        arrayDePosts.push(post);
        container.innerHTML += `<div>
                                    <h1>${post.tituloDoPost}</h1>
                                    <p>${post.autorDoPost}</p>
                                    <p>${post.conteudoDoPost}</p>
                                </div>`

        titulo.value = "";
        autor.value = "";    
        conteudo.value = "";
    }
    else {
        alert("Por favor, preencha todos os campos!");
    }  
}
