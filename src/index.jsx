import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { jokes } from './jokes.js';
import { Joke } from './Joke/Joke.jsx';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            userId={joke.id}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
