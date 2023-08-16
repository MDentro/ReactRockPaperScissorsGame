import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Rules from './components/rules/Rules'
import Game from './pages/game/Game'
import Button from './components/button/Button'
import BeginScreenGame from './pages/beginScreenGame/BeginScreenGame'

function App() {
  const [userChoice, setUserChoice] = useState('')
  const [beginScreenGame, toggleBeginScreenGame] = useState(true)
  const [game, toggleGame] = useState(false)
  const [displayRules, toggleDisplayRules] = useState(false)
  const [score, setScore] = useState()

  function handleBeginScreenGame() {
    toggleBeginScreenGame(false)
    toggleGame(true)
  }

  useEffect(() => {
    const savedScore = localStorage.getItem('score')

    if (savedScore === null) {
      setScore(0)
    } else {
      setScore(Number(savedScore))
    }

    toggleBeginScreenGame(true)
    toggleGame(false)
  }, [])

  function restartGame() {
    toggleBeginScreenGame(true)
    toggleGame(false)
  }

  const showRules = () => {
    toggleDisplayRules(!displayRules)
  }

  return (
    <div className="page">
      <div className="wrapper">
        <Header score={score} setScore={setScore}/>

        {beginScreenGame && (
          <BeginScreenGame
            setUserChoice={setUserChoice}
            handleBeginScreenGame={handleBeginScreenGame}
          />
        )}
        {game && (
          <Game
            userChoice={userChoice}
            score={score}
            setScore={setScore}
            restartGame={restartGame}
          />
        )}
      </div>
      <footer>
        {displayRules && <Rules showRules={showRules} />}
        <Button clickHandler={showRules}>RULES</Button>
      </footer>
    </div>
  )
}

export default App
