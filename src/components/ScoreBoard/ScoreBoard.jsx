import React from 'react'
import styles from './ScoreBoard.module.css';
import logo from './../../assets/logo.svg';

function ScoreBoard() {
  return (
    <div className={styles.container}>
        <img src={logo} alt="Logo" />
        <div className={styles.score}>
            <span>Score</span>
            <span>12</span>
        </div>
    </div>
  )
}

export default ScoreBoard