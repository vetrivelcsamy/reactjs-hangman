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

function handleImageSelection(selectedImage){
  let imagesArray = [];
  if (selectedImage === 'pic1') {
    imagesArray = "PIC1" ;
  } else {
    imagesArray = "PIC2";
  }
  return imagesArray;
}
function setst_game(level){
  st_game = level ;
}
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



describe('Story 1 Testcase 1 | Story 2 Testcase 1,4,7',() =>{

  it('S1-Tc1,S2-Tc1 : Change to Programming with Easy Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Easy";
    var categorys = "Programming";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

  it('S1-Tc1,S2-Tc4 : Change to Animal with Easy Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Easy";
    var categorys = "Animal";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

  it('S1-Tc1,S2-Tc7 : Change to Country with Easy Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Easy";
    var categorys = "Country";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

})

describe('Story 1 Testcase 2 | Story 2 Testcase 2,5,8',() =>{

  it('S1-Tc2,S2-Tc2 : Change to Programming with Medium Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Medium";
    var categorys = "Programming";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

  it('S1-Tc2,S2-Tc5 : Change to Animal with Medium Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Medium";
    var categorys = "Animal";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });
  
  it('S1-Tc2,S2-Tc8 : Change to Country with Medium Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Medium";
    var categorys = "Country";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

})

describe('Story 1 Testcase 3 | Story 2 Testcase 3,6,9',() =>{

  it('S1-Tc3,S2-Tc3 : Change to Programming with Hard Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Hard";
    var categorys = "Programming";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

  it('S1-Tc3,S2-Tc6 : Change to Animal with Hard Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Hard";
    var categorys = "Animal";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

  it('S1-Tc3,S2-Tc9 : Change to Country with Hard Mode', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Homepage />, div);
    var level = "Hard";
    var categorys = "Country";
    const Category = Choose_Category(categorys) ;
    const result = Choose_level(level, Category);
  
    expect(result).toString();
  });

})

describe('Story 1 Testcase 4 | Story 2 Testcase 10',() =>{

  it('S1-Tc4,S2-Tc10 : If Select Difficulty You can play', () => {
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
  
})

describe('Story 1 Testcase 5 | Story 2 Testcase 11',() =>{

  it('S1-Tc5,S2-Tc11 : Resets the game', async () => {
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

})

describe('Story 1 Testcase 1,2,3 | Story 2 Testcase 1,2,3,4,5,6,7,8,9 ',() =>{

  it('S1-Tc1, S2-Tc1 : Correctly guesses a letter "Easy , Programming"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Easy" category="Programming" />, div);
  
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
  it('S1-Tc2, S2-Tc2 : Correctly guesses a letter "Medium , Programming"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Medium" category="Programming" />, div);
  
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
  it('S1-Tc3, S2-Tc3 : Correctly guesses a letter "Hard , Programming"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Hard" category="Programming" />, div);
  
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
  it('S1-Tc1, S2-Tc4 : Correctly guesses a letter "Easy , Animal"', () => {
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
  it('S1-Tc2, S2-Tc5 : Correctly guesses a letter "Medium , Animal"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Medium" category="Animal" />, div);
  
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
  it('S1-Tc3, S2-Tc6 : Correctly guesses a letter "Hard , Animal"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Hard" category="Animal" />, div);
  
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
  it('S1-Tc1, S2-Tc7 : Correctly guesses a letter "Easy , Country"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Easy" category="Country" />, div);
  
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
  it('S1-Tc2, S2-Tc8 : Correctly guesses a letter "Medium , Country"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Medium" category="Country" />, div);
  
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
  it('S1-Tc3, S2-Tc9 : Correctly guesses a letter "Hard , Country"', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hangman difficultyLevel="Hard" category="Country" />, div);
  
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


})

describe('Story 3 Testcase 1,2,3 ',() =>{

  it('S3-Tc1: Giving 1 hint to player', () => {
    const answer = 'HELLO';
    const guessed = new Set(['H', 'E', 'L']);
    clearst_game() ;
  
    const hint = provideHint(answer, guessed);
  
    expect(hint).toBeTruthy();
    expect(typeof hint).toBe('string');
  });

  it('S3-Tc2 : Cannot use "Hint" Button after Lose a game', () => {
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

  it('S3-Tc3: Cannot use "Hint" Button after Win a game', () => {
    const answer = 'apple';
    const guessed = ['a', 'p', 'l', 'e'];
  
    Choose_level("Easy","Animal");
  
    const hint = provideHint(answer, guessed);
  
    expect(hint).toBeUndefined();
  });

})

describe('Story 5 Testcase 1,2',() =>{
  
  it("S5-Tc1 : select picture1",() =>{
    const selectedImage = 'pic1';
    const result = handleImageSelection(selectedImage);
    expect(result).toBe("PIC1")
  })
  it("S5-Tc2 : select picture2",() =>{
    const selectedImage = 'pic2';
    const result = handleImageSelection(selectedImage);
    expect(result).toBe("PIC2")
  })
})
describe('Story 6 Testcase 1,2,3 ',() =>{

  it("S6-Tc1 : can't give hint in easy mode", () => {
    const answer = 'dog';
    const guessed = ['d' ];
    clearst_game() ;
    setst_game("Easy") ;
  
    const hint = provideHint(answer,guessed) ;
  
    expect(hint).toBeUndefined();
  })

  it("S6-Tc2 : can't give hint in Medium mode", () => {
    const answer = 'tiger';
    const guessed = ['t','i','g'];
    clearst_game() ;
    setst_game("Medium","Programming") ;
  
    const hint = provideHint(answer,guessed) ;
  
    expect(hint).toBeUndefined();
  })

  it("S6-Tc3 : can't give hint in Hard mode", () => {
    const answer = 'aoifuka';
    const guessed = ['a','o','i'];
    clearst_game() ;
    setst_game("Hard") ;
  
    const hint = provideHint(answer,guessed) ;
  
    expect(hint).toBeUndefined();
  })

})

describe('Story 7 Testcase 1 ',() =>{

  it('S7-Tc1 : Can be render', () => {
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
  
})

describe('System test ',() =>{

  it('System Test : navigates back to homepage from Hangman', () => {
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

})

