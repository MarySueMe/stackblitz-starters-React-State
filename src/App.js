import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  // Iteration 1: Implement functionality to increase counter
  const [likes, setLikes] = useState(0);

  // Iteration 2: Add a second button to decrease counter
  const decreaseLikes = () => {
    if (likes > 0) {
      setLikes((prevLikes) => prevLikes - 1);
    }
  };

  // Iteration 3: Ensure counter is never below 0
  const increaseLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div>
      <Header />

      <div id="main-content">
        <section>
          <p>Number of likes: {likes}</p>
          <button onClick={increaseLikes}>Increase</button>
          <button onClick={decreaseLikes}>Decrease</button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
