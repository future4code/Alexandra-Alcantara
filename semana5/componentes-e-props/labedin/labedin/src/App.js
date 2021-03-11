import React from 'react';
import './App.css';
import CardCertificados from './components/CardCertificados/CardCertificado';
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
          link=""
          nome="Ver mais"
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

        <h2>Licenças e Certificados</h2>
        <CardCertificados
          imagem="https://yt3.ggpht.com/ytc/AAUvwnidRK2ISGbema745R7GL1cTKMOJkEdnEPoh6qxG2g=s900-c-k-c0x00ffffff-no-rj"
          nome="Introduction to Cybersecurity"
          instituicao="Cisco"
          dataemissao="Dez. 2020"
          verificarcredencial="https://www.youracclaim.com/badges/7b3eb8c1-fea7-42ea-844b-f3c1123dad76?source=linked_in_profile"
        />

        <CardCertificados
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQFGfERBPGurCg/company-logo_200_200/0/1519856309184?e=1623283200&v=beta&t=TkoGYkzUpYcSkBloLQjXSOFhJcQ8bBMuTWTwuQ4-A9c"
          nome="Python Data Structures"
          instituicao="University of Michigan"
          dataemissao="Out. 2020"
          verificarcredencial="https://www.coursera.org/account/accomplishments/verify/9HGPD6EXM7ED?utm_source=link"
        />
      </div>

      <div className="page-section-container">
        <h2 className="redes">Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          link="https://www.facebook.com/alexandra.alcantara.357622"
          nome="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          link=""
          nome="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
