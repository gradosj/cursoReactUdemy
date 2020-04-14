import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = { contador: this.props.contadorInicial };
		setInterval(() => {
			this.setState({ contador: this.state.contador + 1 });
		}, 1000);
	}
	render() {
		const contador = 0;
		return <span>{this.state.contador}</span>;
	}
}

/*Contador.defaultProps = {
	contadorInicial : 0
}*/
function Hello(props) {
	return <h2> {props.tittle} </h2>;
}

const Hello2 = (props) => <h2>{props.tittle}</h2>;

class Hello3 extends Component {
	render() {
		return <h3>{this.props.tittle}</h3>;
	}
}

class Text extends Component {
	render() {
		const array1 = this.props.arrayOfNumbers.map(this.props.multiply);

		return (
			<div>
				{this.props.tittle}
				<p>{array1.join('-')}</p>
				<p>{this.props.objectWithInfo.key}</p>
				<p>Primer componente con state</p>
				<Contador contadorInicial={80} />
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						<Hello tittle="Hola react" />
						<Hello2 tittle="Hola React 2" />
						<Hello3 tittle="Hola react 3" />
						<Text
							arrayOfNumbers={[ 10, 20, 30 ]}
							objectWithInfo={{ key: 'Firs value', key2: 'value2' }}
							number={32}
							text="texto de prueba"
							multiply={(number) => number * 10}
							tittle={<h1> Este es el titulo</h1>}
							isActivated
						/>
					</p>
				</header>
			</div>
		);
	}
}

export default App;
