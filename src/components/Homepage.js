import React, { useState } from 'react';
import Hangman from './Hangman';

export default function Homepage() {
  const [showHangman, setShowHangman] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState('');

  const startHangman = (level) => {
    setDifficultyLevel(level);
    setShowHangman(true);
  };

  return (
    <div className="Hangman">
      <div className="text-center">
        {!showHangman && (
          <a className="navbar-brand text-light" href="/">
            <br />
            <br />
            <br />
            <h1>Hangman.Do (or) Die</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
          </a>

        )}
      </div>

      <div className="text-center"> {/* Centering the content */}
        {!showHangman && (
          <>
            <button id='Easy' className="Hangman-reset mx-2" onClick={() => startHangman('Easy')}>
              Easy
            </button>
            <button id='Medium' className="Hangman-reset mx-2" onClick={() => startHangman('Medium')}>
              Medium
            </button>
            <button id='Hard' className="Hangman-reset mx-2" onClick={() => startHangman('Hard')}>
              Hard
            </button>
          </>
        )}
      </div>

      {showHangman && <Hangman difficultyLevel={difficultyLevel} />}

    </div>
  );
}