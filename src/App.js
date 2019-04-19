import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//aqui esta o tabuleiro
class App extends Component {
  render() {
    return (
      <div className="tabuleiro">
 
        <div id="a1" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="a2" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="a3" className="bloco" onclick="jogada(this.id);verifica();"></div>

        <div id="b1" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="b2" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="b3" className="bloco" onclick="jogada(this.id);verifica();"></div>

        <div id="c1" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="c2" className="bloco" onclick="jogada(this.id);verifica();"></div>
        <div id="c3" className="bloco" onclick="jogada(this.id);verifica();"></div>
         
</div>
    );
  }
}

//aqui estao definidos dos bloquinhos- eu acho
class Bloco extends React.Component{
  render(){
    return(
      <button className="bloco">
      {this.props.value}
      </button>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
export default App;
