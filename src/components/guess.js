import React from 'react';

import './guess.css';

export default function GuessSection(props) {
  return (
    <section id="guess" >
      <h2 id="guess-title">Make your guess!</h2>
      <input
        type="number"
        min="1"
        max="100"
        name="userGuess"
        id="userGuess"
        class="text"
        autocomplete="off"
        aria-labelledby="feedback"
        required=""
        />
      <button
        type="submit"
        name="submit"
        id="guessButton"
        class="button">Guess
      </button>  
      </section>
  );
}
