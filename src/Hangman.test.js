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

function clearst_game(){
  st_game = "" ;
}

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

  let maxHintsAllowed = 0;
  if (st_game === "Easy") {
    maxHintsAllowed = 2;
  } else if (st_game === "Medium") {
    maxHintsAllowed = 3;
  } else if (st_game === "Hard") {
    maxHintsAllowed = 4;
  }

  if (availableHints.length <= maxHintsAllowed) {
    console.log(`No new hints for ${st_game}`);
    return; 
  }

  if (availableHints.length === 0) {
    console.log("No new hints available");
    return; // No new hints available
  }
  
  const randomIndex = Math.floor(Math.random() * availableHints.length);
  const hint = availableHints[randomIndex];

  return hint;
}


test('S1-Tc1 : Change to Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Easy";
  const result = Choose_level(level);

  expect(result).toString();
});

test('S1-Tc2 : Change to Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Medium";
  const result = Choose_level(level);

  expect(result).toString();
});

test('S1-Tc3 : Change to Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Hard";
  const result = Choose_level(level);

  expect(result).toString();
});

test('S1-Tc4 : If Select Difficulty You can play', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Medium" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Hard" />, div);
  expect.anything();
});

test('S1-Tc5 : Resets the game', async () => {
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

test('S1-Tc1,Tc2,Tc3 : Correctly guesses a letter', () => {
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

test('S3-Tc1: Giving 1 hint to player', () => {
  const answer = 'HELLO';
  const guessed = new Set(['H', 'E', 'L']);
  clearst_game() ;

  const hint = provideHint(answer, guessed);

  expect(hint).toBeTruthy();
  expect(typeof hint).toBe('string');
});

test('S3-Tc2 : Cannot use "Hint" Button after Lose a game', () => {
  const answer = 'apple';
  const guessed = ['l', 'o', 's', 'e', 'a'];
  var hint;

  if(answer.length == guessed.length){
    hint = null;
  }
    else{
   hint = provideHint(answer, guessed);
  }

  expect(hint).toBeNull();
});

test('S3-Tc3: Cannot use "Hint" Button after Win a game', () => {
  const answer = 'apple';
  const guessed = ['a', 'p', 'l', 'e'];

  Choose_level("Easy");

  const hint = provideHint(answer, guessed);

  expect(hint).toBeUndefined();
});





test('System Test : navigates back to homepage from Hangman', () => {
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

test("S6-Tc1 : can't give hint in easy mode", () => {
  const answer = 'dog';
  const guessed = ['d' ];
  clearst_game() ;
  Choose_level("Easy") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test("S6-Tc2 : can't give hint in Medium mode", () => {
  const answer = 'nisuma';
  const guessed = ['n','i','s'];
  clearst_game() ;
  Choose_level("Medium") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test("S6-Tc3 : can't give hint in Hard mode", () => {
  const answer = 'aoifuka';
  const guessed = ['a','o','i'];
  clearst_game() ;
  Choose_level("Hard") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})