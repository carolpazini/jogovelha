import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ankh from './ankh.png';
import horus from './horus.png';

//aqui esta o tabuleiro
function Tabuleiro() {
  return (
    <JogadaContext.Consumer>
      {jogada => (
        <>
          <div className="tabuleiro">
            <div className="bloco"> <Bloco ref={jogada.state.a1} /> </div>
            <div className="bloco"><Square ref={game.state.a2} /> </div>
            <div className="bloco"><Square ref={game.state.a3} /> </div>
          
            <div className="bloco"> <Square ref={game.state.b1} /> </div>
            <div className="bloco"> <Square ref={game.state.b2} /> </div>
            <div className="bloco"> <Square ref={game.state.b3} /> </div>
          
            <div className="bloco"> <Square ref={game.state.c1} /> </div>
            <div className="bloco"> <Square ref={game.state.c2} /> </div>
            <div className="bloco"> <Square ref={game.state.c3} /> </div>
          </div>
        </>
      )}
    </GameContext.Consumer>
  );
}


//aqui estao definidos dos bloquinhos- eu acho
class Bloco extends React.Component{
  render(){
    const icone = this.state;
    if(icone === ankh){
      return ankh;
    }else{
      return horus; 
  }
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Jogada />, rootElement);



export default Jogada;