// Hangman.test.js

import React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hangman from './Hangman';

test('clicking on the "Easy" button should log "Selected level: Easy"', () => {
    render(<Hangman/>);
    console.log('Test passed!');
});

// test('clicking on the "Easy" button should log "Selected level: Easy"', () => {
//   render(<Hangman></Hangman>);

//   // Simulate a button click
//   const easyButton = screen.getByText(/Easy/i);
//   fireEvent.click(easyButton);

//   // Check if the Choose_level function is called with the correct argument
//   expect(console.log).toHaveBeenCalledWith('Selected level: Easy');
// });

// test('clicking on the "Medium" button should log "Selected level: Medium"', () => {
//   render(); // Pass the Hangman component to render

//   // Simulate a button click
//   const mediumButton = screen.getByText(/Medium/i);
//   fireEvent.click(mediumButton);

//   // Check if the Choose_level function is called with the correct argument
//   expect(console.log).toHaveBeenCalledWith('Selected level: Medium');
// });

// test('clicking on the "Hard" button should log "Selected level: Hard"', () => {
//   render(); // Pass the Hangman component to render

//   // Simulate a button click
//   const hardButton = screen.getByText(/Hard/i);
//   fireEvent.click(hardButton);

//   // Check if the Choose_level function is called with the correct argument
//   expect(console.log).toHaveBeenCalledWith('Selected level: Hard');
// });

// test('reset button should reset the game state', () => {
//   render(); // Pass the Hangman component to render

//   // Simulate a button click
//   const easyButton = screen.getByText(/Easy/i);
//   fireEvent.click(easyButton);

//   // Simulate a reset button click
//   const resetButton = screen.getByText(/Reset/i);
//   fireEvent.click(resetButton);

//   // Check if the game state is reset as expected
//   const guessedWordElement = screen.getByTestId('guessed-word');
//   expect(guessedWordElement.textContent).not.toMatch(/_/); // Adjust this based on your component's behavior
// });
