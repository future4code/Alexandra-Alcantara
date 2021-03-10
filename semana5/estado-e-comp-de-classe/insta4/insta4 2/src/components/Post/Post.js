import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg' // (1)
import iconeCoracaoPreto from '../../img/favorite.svg' // (1)
import iconeComentario from '../../img/comment_icon.svg' 
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

class Post extends React.Component { // DECLARANDO UM COMPONENTE DE CLASSE
  state = {
    curtido: false, // (1) OS POSTS COMEÇAM SEM CURTIDAS -> FALSE
    numeroCurtidas: 0, // NÚMERO DE CURTIDAS = 0
    comentando: false, // (2) O POST COMEÇA SEM COMENTÁRIOS -> FALSE
    numeroComentarios: 0
  }

  onClickCurtida = () => { // (1) 
    console.log('Curtiu!')
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => { // FUNÇÃO QUE CONTROLA O CONTADOR DOS COMENTÁRIOS 
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida // (1) DECLARAÇÃO DE VAR RELACIONADA AO "CURTIDO" DO STATE

    if(this.state.curtido) { // (1) SE O STATE DE CURTIDO FOR TRUE...
      iconeCurtida = iconeCoracaoPreto // ATRIBUIR A IMG 'ICONECORACAOPRETO' À VAR 'ICONECURTIDA'
    } else {
      iconeCurtida = iconeCoracaoBranco // (1) SE NÃO, ATRIBUIR A IMG 'ICONECORACAOBRANCO' À VAR 'ICONECURTIDA'
    }

    let componenteComentario // (2) DECLARAÇÃO DE VAR RELACIONADA AO "COMENTANDO" DO STATE

    if(this.state.comentando) { // (2) SE O STATE DE COMENTANDO FOR TRUE...
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/> // ESSE TRECHO NÃO ESTÁ CLARO
    }

    // CLASSNAME = CLASSE DE CSS (COM OU SEM CHAVES? ONTEM FIZ SEM CHAVES O.o)
    return <div className={'post-container'}>
      <div className={'post-header'}> 
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador // COMPONENTE PARA CONTAR AS CURTIDAS
          icone={iconeCurtida} // (1) A IMG AQUI DEPENDE DO RESULTADO DO RENDER() PARA SER CORAÇÃO BRANCO OU PRETO
          onClickIcone={this.onClickCurtida} // 
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador // COMPONENTE PARA CONTAR OS COMENTÁRIOS
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post