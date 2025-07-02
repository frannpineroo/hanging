import { useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css';


function App() {
  
  const [ attempts ] = useState(5)

  const checkLetter = (letter: string) => {
    console.log(letter);
  }

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={ attempts } />

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _</h3>

      {/* Contador de intentos */}
      <h3>Intentos: 0</h3>

      {/* Botones de Letras */}
      {
        letters.map( (letter) => (
          <button 
            onClick={ () => checkLetter(letter) }
            key={ letter }>
              { letter }
          </button>
        ))
      }

    </div>
  )
};

export default App;
