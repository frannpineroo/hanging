import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import './App.css';
import { getRandomWord } from './helpers/getRandomWord';


function App() {
  
  const [ word, setWord ] = useState( getRandomWord() );
  const [ hiddenWord, setHidddenWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState(0)
  const [ lose, setLose ] = useState( false );
  const [ won, setWon ] = useState( false );

  // Determinar si el jugador ha perdido
  useEffect( () => {
    if ( attempts >= 9 ) {
      setLose(true);
    }
  }, [ attempts ]); // hooks

  // Determinar si el jugador ha ganado
  useEffect( () => {
    if ( hiddenWord.replace(/ /g, '') === word ) {
      setWon(true);
    }
  }, [ hiddenWord ]); // hooks

  const checkLetter = (letter: string) => {
    if ( lose || won ) return; // Si ya se ha ganado o perdido, no hacer nada

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

  const newGame = () => {
    const newWord = getRandomWord();
    setWord( newWord );
    setHidddenWord('_ '.repeat( newWord.length ) );
    setAttempts( 0 );
    setLose( false );
    setWon( false );
  }

  return (
    <div className="App">
      {/* Imagenes */}
      <HangImage imageNumber={ attempts } />

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>

      {/* Contador de intentos */}
      <h3>Intentos: { attempts }</h3>

      {/* Mensaje de derrota */}
      { lose && <h2>¡Perdiste! La palabra era: { word }</h2> }

      {/* Mensaje de victoria */}
      { won && <h2>¡Ganaste! La palabra era: { word }</h2> }

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

      <br /><br />
      <button onClick={ newGame }>Siguiente</button>

    </div>
  )
};

export default App;
