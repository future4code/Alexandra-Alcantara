import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img src={props.icone} alt={'Icone'} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
