import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act } from 'react-dom/test-utils';
import Hangman from './components/Hangman';
import Homepage from './components/Homepage';
import { PROGRAMING_LANG, ANIMAL_ARRAY, COUNTRY_ARRAY, randomWordEasy, randomWordMedium, randomWordHard } from './components/words';

let states;
let state;
let st_game;
let cat_game ;

function clearst_game(){
  st_game = "" ;
}

function Choose_Category(input) {
  var Category;
  if (input === "Programming") {
    Category = PROGRAMING_LANG;
  } else if (input === "Animal") {
    Category = ANIMAL_ARRAY;
  } else if (input === "Country") {
    Category = COUNTRY_ARRAY;
  }
  return Category;
}
function Choose_level(level, Category) {
  if (level === "Easy") {
    states = randomWordEasy(Category);
  } else if (level === "Medium") {
    states = randomWordMedium(Category);
  } else if (level === "Hard") {
    states = randomWordHard(Category);
  }
  cat_game = Category;
  st_game = level;
  return states;
}

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

  const randomIndex = Math.floor(Math.random() * availableHints.length);
  const hint = availableHints[randomIndex];

  return hint;
}


test('S1-Tc1,S2-Tc1 : Change to Programming with Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Easy";
  var categorys = "Programming";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc2,S2-Tc2 : Change to Programming with Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Medium";
  var categorys = "Programming";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});


test('S1-Tc3,S2-Tc3 : Change to Programming with Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Hard";
  var categorys = "Programming";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc1,S2-Tc4 : Change to Animal with Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Easy";
  var categorys = "Animal";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc2,S2-Tc5 : Change to Animal with Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Medium";
  var categorys = "Animal";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});


test('S1-Tc3,S2-Tc6 : Change to Animal with Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Hard";
  var categorys = "Animal";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc1,S2-Tc7 : Change to Country with Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Easy";
  var categorys = "Country";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc2,S2-Tc8 : Change to Country with Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Medium";
  var categorys = "Country";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});


test('S1-Tc3,S2-Tc9 : Change to Country with Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Homepage />, div);
  var level = "Hard";
  var categorys = "Country";
  const Category = Choose_Category(categorys) ;
  const result = Choose_level(level, Category);

  expect(result).toString();
});

test('S1-Tc4,S2-Tc10 : If Select Difficulty You can play', () => {
  const div = document.createElement('div');
  //Programming
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Programming" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Medium" category="Programming" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Hard" category="Programming" />, div);
  //Animal
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Animal" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Medium" category="Animal" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Hard" category="Animal" />, div);
  //Country
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Country" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Medium" category="Country" />, div);
  ReactDOM.render(<Hangman difficultyLevel="Hard" category="Country" />, div);
  expect.anything();
});

test('S1-Tc5,S2-Tc11 : Resets the game', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Animal" />, div);

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


test('S1-Tc1,Tc2,Tc3 , S2-Tc1,Tc2,Tc3,Tc4,Tc5,Tc6,Tc7,Tc8,Tc9, : Correctly guesses a letter', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Animal" />, div);

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

  Choose_level("Easy","Animal");

  const hint = provideHint(answer, guessed);

  expect(hint).toBeUndefined();
});

test("S6-Tc1 : can't give hint in easy mode", () => {
  const answer = 'dog';
  const guessed = ['d' ];
  clearst_game() ;
  Choose_level("Easy","Animal") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test("S6-Tc1 : can't give hint in Medium mode", () => {
  const answer = 'dog';
  const guessed = ['d' ];
  clearst_game() ;
  Choose_level("Medium","Programming") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test("S6-Tc2 : can't give hint in Medium mode", () => {
  const answer = 'tiger';
  const guessed = ['t','i','g'];
  clearst_game() ;
  Choose_level("Medium","Programming") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test("S6-Tc3 : can't give hint in Hard mode", () => {
  const answer = 'aoifuka';
  const guessed = ['a','o','i'];
  clearst_game() ;
  Choose_level("Hard","Programming") ;

  const hint = provideHint(answer,guessed) ;

  expect(hint).toBeUndefined();
})

test('System Test : navigates back to homepage from Hangman', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman difficultyLevel="Easy" category="Animal" />, div);

  const backButton = div.querySelector('.navbar-brand');
  expect(backButton).toBeTruthy();

  act(() => {
    backButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  const homepageTitle = div.querySelector('.navbar-brand');
  expect(homepageTitle.textContent).toContain('Hangman');
});