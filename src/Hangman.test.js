import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hangman from './components/Hangman';

//เหนื่อยมั่กๆคับ
function Choose_level(level) {
  console.log(`Selected level: ${level}`);
  return level;
}

it('renders without problem', () => {
  const div = document.createElement('div');
  ReactDOM.render();
});

it('Change to Easy Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman />, div);
  var level = "";
  const result = Choose_level(level);

  expect(result).toEqual("Easy");
});

it('Change to Medium Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman />, div);
  var level = "";
  const result = Choose_level(level);

  expect(result).toEqual("Medium");
});

it('Change to Hard Mode', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hangman />, div);
  var level = "";
  const result = Choose_level(level);

  expect(result).toEqual("Hard");
});

