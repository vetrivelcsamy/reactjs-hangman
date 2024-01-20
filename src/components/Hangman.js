import React, { Component } from "react";
import { PROGRAMING_LANG, ANIMAL_ARRAY, COUNTRY_ARRAY, randomWordEasy, randomWordMedium, randomWordHard } from "./words";

import step0 from "./images/0n.png";
import step1 from "./images/1n.png";
import step2 from "./images/2n.png";
import step3 from "./images/3n.png";
import step4 from "./images/4n.png";
import step5 from "./images/5n.png";
import step6 from "./images/6n.png";
import step7 from "./images/0.jpg";
import step8 from "./images/1.jpg";
import step9 from "./images/2.jpg";
import step10 from "./images/3.jpg";
import step11 from "./images/4.jpg";
import step12 from "./images/5.jpg";
import step13 from "./images/6.jpg";

let st_game;
let gameStat;
let cat_game;
let states;
let selectedImage;
var hint;
class Hangman extends Component {

  Choose_Category(input) {
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

  Choose_level(level, Category) {
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

  static defaultProps = {
    maxWrong: 6,
    images: [],

  };

  constructor(props) {
    super(props);
    selectedImage = props.selectedImage;
    const selectedCategory = this.Choose_Category(props.category);
    const initialWord = this.Choose_level(props.difficultyLevel, selectedCategory);
    
    
    this.state = {
      mistake: 0,
      guessed: new Set(),
      answer: initialWord,
      hintMessage: '',
      category: props.category,
      hintButtonDisabled: false,
      images: this.handleImageSelection(props.selectedImage),
    };
    

    this.handleGuess = this.handleGuess.bind(this);
    this.keyPress = this.keyPress.bind(this);
    window.addEventListener("keydown", this.keyPress);
  }
  
  handleImageSelection(selectedImage){
    let imagesArray = [];
    if (selectedImage === 'pic1') {
      imagesArray = [step0, step1, step2, step3, step4, step5, step6];
    } else {
      imagesArray = [step7, step8, step9, step10, step11, step12, step13];
    }
    return imagesArray;
  }

  guessedWord() {
    return this.state.answer
      .split("")
      .map((bingo) => (this.state.guessed.has(bingo) ? bingo : "_"));
  }

  handleGuess(value) {
    let letter = value;
    this.setState((st) => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
    }));
  }

  provideHint() {
    const answerSet = new Set(this.state.answer.split(''));
    let availableHints = Array.from(answerSet);

    // Remove already guessed letters from available hints
    for (const letter of this.state.guessed) {
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
      this.setState({ hintButtonDisabled: true });
      return;
    }

    if (availableHints.length === 0) {
      console.log("No new hints available");
      this.setState({ hintButtonDisabled: true });
      return; // No new hints available
    }

    // Randomly choose a hint from the available ones
    const randomIndex = Math.floor(Math.random() * availableHints.length);
    hint = availableHints[randomIndex];

    // Update guessed letters with the new hint
    this.handleGuess(hint);

    const hintMessage = `Hint: The word now looks like this - ${hint}`;
    this.setState({ hintMessage });
  }

  keyPress(event) {
    /**
     * 8 = backspace
     * 13 = enter
     * 32 = space
     * 65 = A (Capital)
     * 90 = Z (Capital)
     * 97 = a (Small)
     * 122 = z (Small)
     */
    if (gameStat === "YOU WON" || gameStat === "YOU LOST") {
      if (event.keyCode === 8 || event.keyCode === 13 || event.keyCode === 32) {
        this.resetButton();
      }
    } else if (
      (event.keyCode >= 65 && event.keyCode <= 90) ||
      (event.keyCode >= 97 && event.keyCode <= 122)
    ) {
      this.handleGuess(event.key);
    } else if (
      event.keyCode === 8 ||
      event.keyCode === 13 ||
      event.keyCode === 32
    ) {
      this.resetButton();
    } else {
    }
  }

  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        className="Hangman-word animated-button"
        key={letter}
        value={letter}
        onClick={(e) => this.handleGuess(e.target.value)}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  showCategory = () => {
    switch (this.state.category) {
      case "Programming":
        return "Programming Language";
      case "Animal":
        return "Animal";
      case "Country":
        return "Country";
      default:
        return "";
    }
  };

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set(),
      answer: this.Choose_level(st_game, cat_game),
      hintButtonDisabled: false,
    });
  };

  render() {
    const { mistake, answer } = this.state;
    const { maxWrong, images } = this.props;
    const gameOver = mistake >= maxWrong;
    const altText = `${mistake}/${maxWrong} wrong guesses`;
    const isWinner = this.guessedWord().join("") === answer;
    gameStat = this.generateButtons();
    if (isWinner) {
      gameStat = "YOU WON";
    }
    if (gameOver) {
      gameStat = "YOU LOST";
    }

    return (
      <div className="Hangman">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand text-light animated-button" href="/">
            Hangman. <small>Do (or) 💀</small>
          </a>

          <h3><span className="d-xl-none d-lg-none text-primary">
            Remaining Lives: {maxWrong - mistake}
          </span></h3>

          <p className="text-center animated-button">
            <button className="Hangman-hint" onClick={() => this.provideHint()} disabled={this.state.hintButtonDisabled} >
              Hint
            </button>
          </p>

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

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item "></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <h3><span className="navbar-text text-primary">
              Remaining Lives: {maxWrong - mistake}
            </span></h3>
          </div>
        </nav>
        <p className="text-center">
          {this.state.images && this.state.images[mistake] && (
            <img src={this.state.images[mistake]} alt={altText} />
          )}
        </p>
        <p className="text-center text-light">
          Guess the {this.showCategory()} ?
        </p>
        <p className="Hangman-word text-center">
          {!gameOver ? this.guessedWord() : answer}{" "}
        </p>

        <p className="text-center text-warning mt-4">{gameStat}</p>

        <div>
          <p className="text-center ">
            <button className="Hangman-reset animated-button" onClick={this.resetButton}>
              Reset
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Hangman;