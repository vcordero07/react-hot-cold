import React from 'react';

import './game.css';

import Guess from './guess'
import Feedback from './feedback'
import Info from './info'

export default class game extends React.Component {
constructor(props){
  super(props);
  this.state = {
    on: false,
    gameInfo: false
  }
}

  _displayInfo = () => {
    this.setState({
      gameInfo: !this.state.gameInfo
    });
  }

  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
            <li><a
                href="#info"
                clasName="info"
                onClick={this._displayInfo}
                >info
                </a>
            </li>
              <li>
              <a
                href="#new-game"
                clasName="new-game"
                >+ new game
              </a>
            </li>
            </ul>
          </nav>
          <h1 >Hot or Cold</h1>
        </header>
        <main>
          <Guess />
          <Feedback />
          <div style={{display: this.state.gameInfo ? 'block' : 'none' }}><Info  /></div>
        </main>
      </div>
    );
  }
}
