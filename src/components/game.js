import React from 'react';

import './game.css';

import GuessSection from './guess'
import FeedbackSection from './feedback'
import InfoSection from './info'

export default class Game extends React.Component {
constructor(props){
  super(props);
  this.state = {
    on: false,
    gameInfo: false,
    guesses: [],
    answer: Math.round(Math.random() * 100),
    feedback: 'Make your guess!'
  }
}

  _displayInfo = () => {
    this.setState({
      gameInfo: !this.state.gameInfo
    });
  }

  _newGame = () => {
    this.setState({
      gameInfo: false,
      guesses: [],
      answer: Math.round(Math.random() * 100),
      feedback: 'Make your guess!'
    });
  }

  _makeGuess = (gues) => {

  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
            <li><a
                href="#info"
                className="info"
                onClick={this._displayInfo}
                >info
                </a>
            </li>
              <li>
              <a
                href="#new-game"
                className="new-game"
                onClick={this._newGame}
                >+ new game
              </a>
            </li>
            </ul>
          </nav>
          <h1 >Hot or Cold</h1>
        </header>
        <main>
          <GuessSection
            feedback={this.state.feedback}/>
          <FeedbackSection />
          <div style={{display: this.state.gameInfo ? 'block' : 'none' }}><InfoSection  /></div>
        </main>
      </div>
    );
  }
}
