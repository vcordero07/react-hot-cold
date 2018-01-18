import React from 'react';

import './feedback.css';

export default function FeedbackSection(props) {
  return (
    <section id="feedback" >

      <ul id="guess-list">
        <li>{props.guessList}</li>
      </ul>
      <h2 id="guess-count">
        You've made <span id="count">{props.guessCount}</span> guesses!
      </h2>
    </section>
  );
}
