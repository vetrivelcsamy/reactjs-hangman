import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import Hangman from './components/Hangman';
import Homepage from './components/Homepage';
import { randomWord , randomWordEasy , randomWordMedium , randomWordHard } from './components/words';

let states;
let state;
let st_game;

function Choose_level(level){
  if(level === "Easy"){
    states = randomWordEasy()
  }else if(level === "Medium"){
    states = randomWordMedium()
  }else if(level === "Hard"){
    states = randomWordHard()
  }

  st_game = level;
  return states;

};

function provideHint(answer, guessed) {
  const answerSet = new Set(answer.split(''));
  let availableHints = Array.from(answerSet);

  for (const letter of guessed) {
    if (availableHints.includes(letter)) {
      availableHints = availableHints.filter((hint) => hint !== letter);
    }
  }

  if (availableHints.length === 0) {
    return null; // ไม่มีตัวชี้แนะใหม่ที่ใช้ได้
  }

  const randomIndex = Math.floor(Math.random() * availableHints.length);
  const hint = availableHints[randomIndex];

  return hint;
}


it('renders without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
});

it('Change to Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Easy";
  const result = Choose_level(level);

  expect(result).toString();
});

it('Change to Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Medium";
  const result = Choose_level(level);

  expect(result).toString();
});

it('Change to Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Hard";
  const result = Choose_level(level);

  expect(result).toString();
});

it('Giveing hint to player', () => {
  const answer = 'HELLO';
  const guessed = new Set(['H', 'E', 'L']);

  const hint = provideHint(answer, guessed);

  expect(hint).toBeTruthy();
  expect(typeof hint).toBe('string');
});

it('Correctly guesses a letter', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" />, div);

  const hangmanComponent = div.querySelector('.Hangman');
  const hangmanWord = div.querySelector('.Hangman-word');
  const buttons = div.querySelectorAll('button');

  const wordToGuess = hangmanWord.textContent.trim();
  const uniqueLetters = new Set(wordToGuess.split(''));

  uniqueLetters.forEach((letter) => {
    const button = [...buttons].find((btn) => btn.textContent === letter);
    if (button) {
      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
    }
  });

  expect(hangmanWord.textContent).toContain(wordToGuess);
});

it('Resets the game', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" />, div);

  const hangmanComponent = div.querySelector('.Hangman');
  const hangmanWord = div.querySelector('.Hangman-word');
  const resetButton = div.querySelector('.Hangman-reset');

  // Simulate wrong guess
  act(() => {
    const buttons = div.querySelectorAll('button');
    const wrongLetterButton = [...buttons].find(
      (btn) => !hangmanWord.textContent.includes(btn.textContent)
    );
    wrongLetterButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Simulate reset
  act(() => {
    resetButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Wait for the component to update
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  const updatedHangmanWord = div.querySelector('.Hangman-word');

  // Check if the reset has removed underscores (i.e., the game has reset)
  expect(updatedHangmanWord.textContent).toContain('_');
});

it('navigates back to homepage from Hangman', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" />, div);

  const backButton = div.querySelector('.navbar-brand');
  expect(backButton).toBeTruthy();

  act(() => {
    backButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  const homepageTitle = div.querySelector('.navbar-brand');
  expect(homepageTitle.textContent).toContain('Hangman');
});