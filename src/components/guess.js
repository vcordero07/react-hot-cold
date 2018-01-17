import React from 'react';

import './guess.css';

export class GuessForm extends React.Component{
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }
  render() {
    return (
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            type="number"
            min="1"
            max="100"
            name="userGuess"
            id="userGuess"
            className="text"
            autoComplete="off"
            aria-labelledby="feedback"
            ref={input => (this.input = input)}
            required
            />
          <button
            type="submit"
            name="submit"
            id="guessButton"
            className="button"
            >Guess
          </button>
        </form>
    );
  }
}

export default function GuessSection(props) {
  return (
    <section id="guess" >
      <h2 id="guess-title">{props.feedback}</h2>
      <GuessForm onMakeGuess={guess => props.onMakeGuess(guess)} />
    </section>
  );
}
