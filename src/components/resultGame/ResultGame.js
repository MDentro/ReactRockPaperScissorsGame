import React from 'react'
import Button from '../button/Button'
import './ResultGame.css'

const ResultGame = ({ result, restartGame }) => {
  function playAgain() {

    restartGame()
  }

  return (
    <div className="result-wrapper">
      {result === 'won' ? (
        <p className="result-game">YOU WIN</p>
      ) : result === 'lost' ? (
        <p className="result-game">YOU LOSE</p>
      ) : (
        <p className="result-game">IT'S A DRAW</p>
      )}
      <section className="result-section">
        <Button clickHandler={() => playAgain()}>PLAY AGAIN</Button>
      </section>
    </div>
  )
}

export default ResultGame
