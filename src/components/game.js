import React from 'react';

import './game.css';

import Guess from './guess'
import Feedback from './feedback'
import Info from './info'

export default class game extends React.Component {
constructor(props){
  super(props);
  this.state = {
    on: false
  }
}
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
            <li>info</li>
            <li>+ new game</li>
            </ul>
          </nav>
          <h1>Hot or Cold</h1>
        </header>
        <main>
          <Guess />
          <Feedback />
          <Info />
        </main>
      </div>
    );
  }
}
