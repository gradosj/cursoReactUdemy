import React, {Component} from 'react';

class LoginButton extends Component {
    render() {
        return <button>INICIAR SESION</button>
    }
}
class ComponenteB extends Component {
    render() {
        return <button>CERRAR SESION</button>
    }
}


export default class ConditionalSection extends Component {
    constructor(props) {
        super(props)
        this.state = {isUserLogged : true}
    }
    render () {
        return (
            
            <div>
                <h4> Bienvenido</h4>
                {this.state.isUserLogged ? <LoginButton/> : <ComponenteB/>}
                
            </div>
        )
    }

}