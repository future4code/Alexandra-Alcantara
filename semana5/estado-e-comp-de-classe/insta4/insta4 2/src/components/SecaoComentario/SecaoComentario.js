import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		temComent: ''
	};

	onChangeComentario = (event) => {
		console.log(event.target.value)
		this.setState({temComent: event.target.value});
	};

	render() {
		return <div className={'comment-container'}>
			<input 
				onChange={this.onChangeComentario}
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.temComent}
			/>
			<button onClick={this.props.aoEnviar}>Send</button>
		</div>
	};
}
