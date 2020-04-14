import React, {Component} from 'react';

export default class Forms extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms : false
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        console.log(this.state)
 
        
    }
    onChanges = (e) => {
              
        console.log(e.target.checked);
        this.setState({inputTerms: e.target.checked})
       
    }
    render () {
        return (
            <div>
                <h4>Formularios</h4>
                <form onSubmit= {this.handleClick}>
                    <p>
                        <label htmlFor= 'name'> Nombre: </label>
                        <input type="text"
                        id= 'name'
                        name= 'username'
                        onChange = {e => this.setState({inputName: e.target.value})}
                        placeholder = 'Introduce el nombre'
                        ref={inputElement => this.inputName = inputElement}
                        value={this.state.inputName} />
                    </p>
                    <p>
                        <label htmlFor= 'twitter'> Twitter: </label>
                        <input type="text"
                        id= 'twitter'
                        name= 'twitterAccount'
                         onChange = {e => this.setState({inputTwitter: e.target.value})}
                        placeholder = 'Introduce el Twitter'
                        ref={inputElement => this.inputTwitter = inputElement}
                        value={this.state.inputTwitter}  />
                    </p>
                    <p>
                        <label htmlFor="Aceptar condiciones">
                            Aceptar condiciones
                            <input onChange={this.onChanges}
                             type='checkbox'
                             checked = {this.state.inputTerms}/>
                        </label>
                    </p>
                    <button>  Enviar </button>
                </form>
            </div>
        )


    }



}
