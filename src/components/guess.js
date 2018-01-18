import React from 'react';

import './guess.css';

export class GuessForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onMakeGuess) {
      this.props.onMakeGuess(this.state.inputValue);
    }
    this.setState({
      inputValue: ''
    })

  }
  _onChange = e => {
    const value = e.target.value;
    this.setState({
      inputValue: value
    })
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
            value={this.state.inputValue}
            onChange={this._onChange}
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
