import { useState } from "react";
import './App.css';

const maxNumber = 100; 

function App() {
  const [guess, setGuess] = useState();
  const [random, setRandom] = useState(Math.floor(Math.random() * maxNumber + 1));
  const [input, setInput] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [showNewGameButton, setShowNewGameButton] = useState(false);

  const handleSubmit = (inputValue) => {
    setGuess(inputValue);
    if (inputValue && inputValue !== random) {
      setAttempts([...attempts, inputValue]);
    } else {
      setShowNewGameButton(true);
    }
  }

  const handleNewGame = () => {
    setGuess();
    setRandom(Math.floor(Math.random() * maxNumber + 1));
    setInput("");
    setAttempts([]);
    setShowNewGameButton(false);
  }

  return (
    <div className="App">
      <h3>What number (between 1 and {maxNumber}) am I thinking of?</h3>
      <div>
        <input type="number" value={input} min="1" max={maxNumber} onChange={(e)=>setInput(e.target.value)} />
        <button type="button" onClick={() => handleSubmit(+input)}>Submit</button>
        {showNewGameButton && <button type="button" onClick={handleNewGame}>New Game</button>}
        {/* <p>{random}</p>  */}
        {(guess && guess !== random) && <h3>{guess > random ? "Number too high!" : "Number too low"}</h3>}
        <div>
          {guess && <h3>{guess === random ? "Correct!" : "Wrong!"}</h3>}
        </div>
      </div>
      <h3>Attempts({attempts.length}): {attempts.join(', ')}</h3>
    </div>
  );
}

export default App;
