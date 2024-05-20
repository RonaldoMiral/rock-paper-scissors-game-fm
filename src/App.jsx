import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard/ScoreBoard.jsx';
import Symbol from './components/Symbol/Symbol.jsx';
import Rules from './components/Rules/Rules.jsx';

import rock from './assets/icon-rock.svg';
import paper from './assets/icon-paper.svg';
import scissors from './assets/icon-scissors.svg';

import styles from './App.module.css';

const symbolImages = [rock, paper, scissors];

function App() {
  const symbols = symbolImages.map((image, index) => {
    return <Symbol key={index} imageSrc={ image } /> 
  })

  return (
    <div className={styles.app}>
      <ScoreBoard />
      <div className={styles.symbols_container}>
        { symbols }
      </div>
      <Rules />
    </div>
  )
}

export default App
