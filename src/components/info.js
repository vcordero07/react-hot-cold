import React from 'react';

import './info.css';

export default function InfoSection(props) {
  return (
    <section id="info" >
      <p>What do I do? <br/>
This is a Hot or Cold Number Guessing Game. The game goes like this:

I pick a random secret number between 1 to 100 and keep it hidden.
You need to guess until you can find the hidden secret number.
You will get feedback on how close ("hot") or far ("cold") your guess is.
<br/><br/>
If you're using a screen reader, you can use the visually hidden "Hear state of game" link in the navigation region to get a reminder of all your past guesses and how close your current guess is to being correct.</p>
    </section>
  );
}
