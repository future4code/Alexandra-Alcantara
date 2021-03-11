import logo from './logo.svg';
import './App.css';
import youtubelogo from "./img/youtubelogo.png";
import home from "./img/home.png";


function App() {
  const titulo = 'Título do vídeo'
  function reproduzVideo () {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
        <div className="tela-inteira">
          <header>
              <img className="img-youtube" src={youtubelogo}  alt="imagem-youtube"/>
              <input type="text" placeholder="Busca" id="campoDeBusca" />
          </header>

          <main>
              <nav class="menu-vertical">
                  <ul>
                      <div className="div-menu-individual">
                        <img className="img-menu" src={home} alt="home" />
                        <a href=""><li className="botoes-menu-vertical">Início</li></a>
                      </div>
                      <div className="div-menu-individual">
                      <img className="img-menu" src={home} alt="home" />
                      <a href=""><li className="botoes-menu-vertical">Em alta</li></a>
                      </div>
                      <div className="div-menu-individual">
                      <img className="img-menu" src={home} alt="home" />
                      <a href=""><li className="botoes-menu-vertical">Inscrições</li></a>
                      </div>
                      <hr />
                      <div className="div-menu-individual">
                      <img className="img-menu" src={home} alt="home" />
                      <a href=""><li className="botoes-menu-vertical">Originais</li></a>
                      </div>
                      <div className="div-menu-individual">
                      <img className="img-menu" src={home} alt="home" />
                      <a href=""><li className="botoes-menu-vertical">Histórico</li></a>
                      </div>
                  </ul>
              </nav>
              
              <section className="painel-de-videos">
                  <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                      <img className="img-videos" src="https://picsum.photos/400/400?a=1 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                      <img className="img-videos" src="https://picsum.photos/400/400?a=2 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=3 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=4 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=5 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=6 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=7 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
                  <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                      <img src="https://picsum.photos/400/400?a=8 " alt="" />
                      <h4>{titulo}</h4>
                  </div>
              </section>
          </main>

          <footer>
              <h4>Oi! Eu moro no footer!</h4>
          </footer>
      </div>
    </div>
  );
}

export default App;
