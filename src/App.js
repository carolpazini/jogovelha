import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//aqui esta o tabuleiro
class Tabuleiro extends Component {
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

//talvez aqui pegue o conteudo do bloquinho


ReactDOM.render(<Tabuleiro />, document.getElementById('root'));

ReactDOM.render(<Bloco />, document.getElementById('a1'));
ReactDOM.render(<Bloco />, document.getElementById('a2'));
ReactDOM.render(<Bloco />, document.getElementById('a3'));

ReactDOM.render(<Bloco />, document.getElementById('b1'));
ReactDOM.render(<Bloco />, document.getElementById('b2'));
ReactDOM.render(<Bloco />, document.getElementById('b3'));

ReactDOM.render(<Bloco />, document.getElementById('c1'));
ReactDOM.render(<Bloco />, document.getElementById('c2'));
ReactDOM.render(<Bloco />, document.getElementById('c3'));

serviceWorker.unregister();

export default Tabuleiro;