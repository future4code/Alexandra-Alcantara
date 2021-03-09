import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './img/eu.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={eu} 
          nome="Alexandra Gonçalves Alcantara" 
          descricao="Olá, eu me chamo Alexandra. Sou aspirante à dev, 
                     adoro aprender sobre o que as linguagens de programação
                     são capazes de fazer, e escrever códigos enxutos, bonitos
                     e que serão úteis para alguém é o que faz o meu dia valer
                     a pena."
        />

        <CardPequeno
          endereco="Rua das Areias do Egito, S/N."
          email="its-me@mail.com"
        />

        <h2>Formação</h2>
        <CardGrande
          nome="Tecnologia em gestão ambiental"
          descricao="Instituto Federal do Ceará (IFCE)"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          nome="Editora Moderna" 
          descricao="Visitando escolas públicas e privadas para fechar 
                     contratos de serviços educacionais." 
        />
        
        <CardGrande 
          nome="Nami - UNIFOR" 
          descricao="Auxiliando o supervisor de estoque no atendimento
                     dos clientes internos e durante as auditorias." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
