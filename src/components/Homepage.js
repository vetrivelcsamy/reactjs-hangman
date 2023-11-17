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
      <nav className="navbar navbar-expand-lg">
        {!showHangman && (
          <a className="navbar-brand text-light" href="/">
            Hangman. <small>Do (or) Die</small>
          </a>
        )}

        <button
          className="navbar-toggler sr-only"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>

        {showHangman && <Hangman difficultyLevel={difficultyLevel} />}
      </nav>
    </div>
  );
}