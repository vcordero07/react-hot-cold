import React from 'react';

import './guess.css';

export default function GuessSection(props) {
  return (
    <section id="guess" >
      <h2 id="guess-title">{props.feedback}</h2>
      <input
        type="number"
        min="1"
        max="100"
        name="userGuess"
        id="userGuess"
        className="text"
        autoComplete="off"
        aria-labelledby="feedback"
        required
        />
      <button
        type="submit"
        name="submit"
        id="guessButton"
        className="button">Guess
      </button>
      </section>
  );
}
