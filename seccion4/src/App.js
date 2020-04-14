import React, { Component } from 'react';
import Forms from './sections/forms';
import './App.css';
import ConditionalSection from './sections/condicional';
import cars from './data/cars.json';
import PropTypes from 'prop-types';


class CardItem extends Component {
	render() {
		const { car } = this.props;
		return (
			<li key={car.id}>
				<p>
					<strong>NombreId: </strong> {car.id}
				</p>
				<p>
					<strong>Nombre: </strong>
					{car.name}
				</p>
				<p>
					<strong>Marca: </strong>
					{car.company}
				</p>
			</li>
		);
	}
}

class Box extends Component {
  render () {
    return (
      <div style= {{border: '1px solid blue', margin: 5, padding: 5, textAlign: "justify"}}>
      {this.props.children}</div>
    )
  }

}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render () {
    const {author, children, date, tittle}
    return (
      <section>
        <h2>{tittle}</h2>
        <p><em>Escrito por {author}</em></p>
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    ) 
    }

  }


class App extends Component {
  constructor () {
    super()
    this.state ={mouse: 0, mouseY: 0}
  }

  handleckick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('hi')
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY})
  }
 

	render() {
		const array = [ 1, 1, 2, 3, 4, 5 ];
		return (
			<div className="App">
				{' '}
				{/* Condicionales */}
				<ConditionalSection />
				{array.map((n, index) => {
					{
						/* Listados */
					}
					return <p key={index}> Soy el numero {n}</p>;
				})}
				<ul>
					{cars.map((car) => {
						return <CardItem id={car.id} key={car.id} car={car} />;
					})}
				</ul>

        {/* Eventos */}
        <h4>Eventos</h4>
        <button onClick= {this.handleckick}>Click</button>
        <div
          onMouseMove={this.handleMouseMove}
          style= {{border: '1px solid #000', marginTop: 10, paddig: 10}}>
            <p>{this.state.mouseX}, {this.state.mouseY} </p>
         </div> 

         {/* Formularios */}
         
           <Forms />
         

         {/* Childrens envuelve componentes y pequeñas plantillas*/ }
         <div className="App">
           <h4>Children props</h4>
           <Box>Hola! soy un children </Box>
           <Box>Soy de box tambien</Box>
           </div>

         {/* Crear layouts en plan articulos */}
         <Article 
         author= 'Jose'
         date={new Date().toLocaleDateString()}
         tittle= 'Articulo de prueba'
         >
           <p>El contenido que envolvemos dentro del componente
             Article será enviado al componente como this.props.children
           </p>
           <strong>y mantiene las etiqueta de dentro</strong>
         </Article>

			</div>
		);
	}
}

export default App;
