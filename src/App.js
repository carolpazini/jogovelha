import React from 'react';
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
    //estado inicial
    this.state = { value: "..." };
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
                : this.state.value === "..."
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

//verifica os bloquinhos
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

//vê quem ganha

//probabilidades do a1 com X(ankh)
if (a1 === "X" && a2 === "X" && a3 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (a1 === "X" && b1 === "X" && c1 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (a1 === "X" && b2 === "X" && c3 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} 

//probabilidades do a1 com o O(horus)
else if (a1 === "O" && a2 === "O" && a3 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} else if (a1 === "O" && b1 === "O" && c1 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} else if (a1 === "O" && b2 === "O" && c3 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} 

//probabilidades do b1 com X(ankh) e O(horus)
else if (b1 === "X" && b2 === "X" && b3 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (b1 === "O" && b2 === "O" && b3 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} 

//probabilidades do c1 com X(ankh) e O(horus)
else if (c1 === "X" && c2 === "X" && c3 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (c1 === "O" && c2 === "O" && c3 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} 

//probabilidades do a2 com X(ankh) e O(horus)
else if (a2 === "X" && b2 === "X" && c2 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (a2 === "O" && b2 === "O" && c2 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
} 

//probabilidades do a3 com X(ankh) e O(horus)
else if (a3 === "X" && b3 === "X" && c3 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (a3 === "O" && b3 === "O" && c3 === "O") {
  this.setState({ progress: "Horús é o ganhador!" });
}  else if (a3 === "X" && b2 === "X" && c1 === "X") {
  this.setState({ progress: "Ankh é o ganhador!" });
} else if (a3 === "X" && b2 === "X" && c1 === "X") {
  this.setState({ progress: "Horús é o ganhador!" });
}

// quando dá velha
else if (
  a1 !== "..." && a2 !== "..." && a3 !== "..." &&
  b1 !== "..." && b2 !== "..." && b3 !== "..." &&
  c1 !== "..." && c2 !== "..." && c3 !== "..."
) {
  this.setState({ progress: "Ops, deu velha, digo, múmia, digo... antiguidade" });
}
};

render() {
  return (
    <div className="mostrador">
    
      <JogadaContext.Provider value={{ state: this.state }}>
      <Tabuleiro />
        <div className="centralizador">
        <h1 >Bem-vindo ao Jogo das Antiguidades</h1>
        <h2 >Escolha entre um Ankh ou um Olho de Hórus</h2>
       
        <img src={ankh} alt="ankh" />
        <img src={horus} alt="horus" />
        
        <h3>{this.state.progress}</h3>
        <button type="button" onClick={ recarrega }> <span>E lá vamos nós...</span> </button> 
        </div>
      </JogadaContext.Provider>
    </div>
  );
}


}
//funcao pra limpar o jogo
function recarrega(){ 
  window.location.reload(); 
}


const rootElement = document.getElementById("root");
ReactDOM.render(<Jogada />, rootElement);



export default Jogada;