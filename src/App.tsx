import { useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css';


function App() {
  
  const [ word ] = useState('COMPUTADORA');
  const [ hiddenWord, setHidddenWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState(0)

  const checkLetter = (letter: string) => {
    if ( !word.includes(letter) ) {
      setAttempts(Math.min(attempts + 1, 9)); // Limita los intentos a un máximo de 9
      return;
    } 

    const hiddenWordArray = hiddenWord.split(' ');

    for ( let i = 0; i < word.length; i++) {
      if ( word[i] === letter ) {
        hiddenWordArray[i] = letter; // Reemplaza el guion bajo por la letra correcta
      }
    }

    setHidddenWord( hiddenWordArray.join(' ') );

  }

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={ attempts } />

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>

      {/* Contador de intentos */}
      <h3>Intentos: { attempts }</h3>

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
