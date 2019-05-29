import React, { Component } from 'react';
import brujula from '../images/brujula.svg';
import aguja from '../images/aguja.svg';
import sunny from '../images/01-sunny.svg';
import parciallycloud from '../images/02-parciallysunny.svg';
import cloudy from '../images/0304-cloudy.svg';
import lightrain from '../images/10-rainy.svg';
import veryrainy from '../images/09-veryrainy.svg';
import thunderstorm from '../images/11-electricstorm.svg';
import snow from '../images/13-snow.svg';
import fog from '../images/50-fog.svg';
import sinIcono from '../images/sinIcono.svg';

class Clima extends Component {

  mostrarResultado = () =>{
    const {name, weather, main, wind} = this.props.resultado;

    if(!name || !weather || !main) return null;

    const kelvin = 273.15;
    const alt = `clima de ${name}`;
    var urlIcono;

    // lo hice con un IF porque con un switch eran muchas lineas e iba a ser dificil de leer.
    if (weather[0].icon === '01d' || weather[0].icon === '01n'){
      urlIcono = sunny;
    } else if (weather[0].icon === '02d' || weather[0].icon === '02n'){
      urlIcono = parciallycloud;
    } else if (weather[0].icon === '03d' || weather[0].icon === '03n' || weather[0].icon === '04d'|| weather[0].icon === '04n' ){
      urlIcono = cloudy;
    } else if (weather[0].icon === '09d' || weather[0].icon === '09n'){
      urlIcono = veryrainy;
    } else if (weather[0].icon === '10d' || weather[0].icon === '10n'){
      urlIcono = lightrain;
    } else if (weather[0].icon === '11d' || weather[0].icon === '11n'){
      urlIcono = thunderstorm;
    } else if (weather[0].icon === '13d' || weather[0].icon === '13n'){
      urlIcono = snow;
    } else if (weather[0].icon === '50d' || weather[0].icon === '50n'){
      urlIcono = fog;
    } else {
      urlIcono = sinIcono;
    }

    return(
      <div className="row">
        <div className="margenTop col s12 m12 l12">
          <h5 style={{color: '#000'}}>El Clima en <b>{name}</b></h5>
          <div className="col s12 m12 l12 sinMP">
            <div className="light-blue align-center row borRad">
              <div className="col l12 m12 s12 resultados">
                <div className="col l2"></div>
                <div className="col l4 m6 s12 temp">
                  <img src={urlIcono} alt={alt} width="80px"/>
                  <p className="temperatura">
                    <b>Actual: {(main.temp - kelvin).toFixed(2)}&deg;C</b>
                  </p>
                  <h6><b>Max.</b> {(main.temp_max - kelvin).toFixed(2)} &deg;C</h6>
                  <h6><b>Min.</b> {(main.temp_min - kelvin).toFixed(2)} &deg;C</h6>
                  <p>Algunos cambios para el GitHub</p>
                  </div>
                <div className="col l4 m6 s12 resto">
                  <div className="white-text">
                  <p><b>Humedad:</b> {main.humidity}% </p>
                  <p><b>Presión:</b> {main.pressure} hPa</p>
                  <p><b>Vientos a</b> {(wind.speed * 1.60934).toFixed(2)} Km/hora</p>
                  <p><b>Dirección</b></p>
                  <div className="contenedor-brujula col s12 m12 l12">
                  <div className="col s12 m12 l12 center-align ccc">
                    <div className="contenedor center-align">
                      <div id="brujula" className="brujula">
                        <img src={brujula} alt="brujula-fondo" width="70px"/>
                        <img src={aguja} alt="aguja" className="agujaSVG" style={{transform :`rotateZ(${wind.deg}deg)`}} />
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    
    return (
      <div className="container">
        {this.mostrarResultado()}
      </div>
    );
  }
}

export default Clima;