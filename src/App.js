import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Casa from './componentes/Casa';


// FORMA DE ESCREVER UM COMPONENTE EM REACT! 
function App() {

  const times = [
    {
      nome:'Grifinória',
      corPrimaria: '#FFC500',
      corSecundaria: '#7F0909',
      corTitulo: '#FFC500',
      corH4: '#7F0909'
    },

    {
      nome: 'Sonserina',
      corPrimaria: '#AAAAAA',
      corSecundaria: '#0D6207',
      corTitulo: '#AAAAAA',
      corH4: '#0D6207'
    },

    {
      nome: 'Corvinal', 
      corPrimaria: '#946B2D',
      corSecundaria: '#000A90',
      corTitulo: '#FF9900',
      corH4: '#000A90'
    },

    {
      nome: 'Lufa-Lufa',
      corPrimaria: '#000000',
      corSecundaria: '#EEE117',
      corTitulo: '#212121',
      corH4: '#000000'
    },
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      
      {times.map(time => <Casa 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      corTitulo={time.corTitulo}
      corH4={time.corH4}
      personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}
      
      
      
    </div>
  );
}

export default App;
