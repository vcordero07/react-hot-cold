import React from 'react';

import './feedback.css';

export default function FeedbackSection(props) {
  return (
    <section id="feedback" >

      <ul id="guess-list">
        <li>-</li>
      </ul>
      <h2 id="guess-count">
        You've made <span id="count">0</span> guesses!
      </h2>
    </section>
  );
}
