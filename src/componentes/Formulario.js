import React, { Component } from 'react'

class Formulario extends Component {

  // crear refs
  ciudadRef = React.createRef();
  paisRef =  React.createRef();

  buscarClima = (e) => {
    e.preventDefault();
    // leer los refs y crear el objeto
    const respuesta = {
      ciudad : this.ciudadRef.current.value,
      pais : this.paisRef.current.value
    }
    // Enviar por props
    this.props.datosConsulta(respuesta);
  }

  render() { 
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m12 l4">
                <input ref={this.ciudadRef} id="ciudad" type="text"/>
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field col s12 m12 l4">
                <select ref={this.paisRef}>
                  <option value="" defaultValue>Elige un país</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
              </div>
              <div className="input-field col s12 m12 l4 offset-2 buscador">
                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Formulario;