import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ankh from './ankh.png';
import horus from './horus.png';

//Cria o jogo no negocio
let JogadaContext = React.createContext("");

//Aqui faz ações nos quadradinhos
class Bloco extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "_" };
  }

  componentDidUpdate() {}

  render() {
    return (
      <JogadaContext.Consumer>
        {jogada => (
          <div
            onClick={
              // determina se ha ou nao um jogo em curso
              jogada.state.progress !== "Em jogo"
                ? null
                : this.state.value === "_"
                ? () => {
                    this.setState({ value: jogada.state.proxJogador }, () => {
                      jogada.state.toggleProxJogador();
                    });
                  }
                : null
            }
            
          >
            {this.state.value}
          </div>
        )}
      </JogadaContext.Consumer>
    );
  }
}

//aqui esta o tabuleiro
function Tabuleiro() {
  return (
    <JogadaContext.Consumer>
      {jogada => (
        <>
          <div className="tabuleiro">
            <div className="bloco"> <Bloco ref={jogada.state.a1} /> </div>
            <div className="bloco"><Bloco ref={jogada.state.a2} /> </div>
            <div className="bloco"><Bloco ref={jogada.state.a3} /> </div>
          
            <div className="bloco"> <Bloco ref={jogada.state.b1} /> </div>
            <div className="bloco"> <Bloco ref={jogada.state.b2} /> </div>
            <div className="bloco"> <Bloco ref={jogada.state.b3} /> </div>
          
            <div className="bloco"> <Bloco ref={jogada.state.c1} /> </div>
            <div className="bloco"> <Bloco ref={jogada.state.c2} /> </div>
            <div className="bloco"> <Bloco ref={jogada.state.c3} /> </div>
          </div>
        </>
      )}
    </JogadaContext.Consumer>
  );
}

// aqui o comeca a ficar serio socorro

class Jogada extends React.Component {
  constructor() {
    super();
    this.state = {
      move: 0,
      proxJogador: "X",
      toggleProxJogador: this.toggleProxJogador,
      progress: "Em jogo"
    };
  }

  componentDidMount() {
    console.log(this.state.a1);
    this.setState(
      {
        a1: React.createRef(),
        a2: React.createRef(),
        a3: React.createRef(),
        b1: React.createRef(),
        b2: React.createRef(),
        b3: React.createRef(),
        c1: React.createRef(),
        c2: React.createRef(),
        c3: React.createRef()
      },
      () => {
        console.log(this.state.a1);
      }
    );
  }

  toggleProxJogador = () => {
    this.setState(
      {
/* poderia ser algo mais ou menos assim tbm eu acho
    const icone = this.state;
    if(icone === ankh){
      return ankh;
    }else{
      return horus; 
 */
        proxJogador: this.state.proxJogador === "X" ?  "O" : "X",
        move: this.state.move++
      },
      this.verifGanhador()
    );
  };

//verifica na real quem ganhou
verifGanhador = () => {
  let a1 = this.state.a1.current.state.value;
  let a2 = this.state.a2.current.state.value;
  let a3 = this.state.a3.current.state.value;

  let b1 = this.state.b1.current.state.value;
  let b2 = this.state.b2.current.state.value;
  let b3 = this.state.b3.current.state.value;

  let c1 = this.state.c1.current.state.value;
  let c2 = this.state.c2.current.state.value;
  let c3 = this.state.c3.current.state.value;

//colocar as probabilidades

};




const rootElement = document.getElementById("root");
ReactDOM.render(<Jogada />, rootElement);



export default Jogada;