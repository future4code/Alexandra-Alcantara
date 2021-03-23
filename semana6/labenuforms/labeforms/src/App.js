import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #EBBDAC;
  height: 100vh;
`

const Button = styled.button`
 background-color: #373737;
 color: #FFFFFF;
 border-radius: 20px;
 border: none;
 padding: 9px;
 margin-top: 15px;
`


export default class App extends React.Component {
  state = {
    etapa: 1
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }

  render() {
    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1 />;
        case 2:
          return <Etapa2 />;
        case 3:
          return <Etapa3 />;
        case 4:
          return <Final />;  
        default:
          break;
      }
    }   
  
    return(
      <Container>
        {renderizaEtapa()}
        {this.state.etapa <= 3 && <Button onClick={this.irParaProximaEtapa}>Próxima etapa</Button>}
      </Container>
    );
  }
}
