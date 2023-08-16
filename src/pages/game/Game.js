import React, { useState, useEffect } from 'react'
import './Game.css'
import GameButtonNoClick from '../../components/gameButton/GameButtonNoClick'
import ResultGame from '../../components/resultGame/ResultGame'

const Game = ({ userChoice, score, setScore, restartGame }) => {
  const [houseChoice, setHouseChoice] = useState()
  const [result, setResult] = useState('')
  const [showResultMobile, toggleShowResultMobile] = useState(false)
  const [showResultDesktop, toggleShowResultDesktop] = useState(false)

  function choiceOfTheHouse() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
  }

  useEffect(() => {
    setTimeout(() => {
      setHouseChoice(choiceOfTheHouse())
    }, 3000)
  }, [])

  useEffect(() => {
    if (houseChoice) {
      setTimeout(() => {
        calculateScore(userChoice, houseChoice)
      }, 2000)
    }
  }, [houseChoice])

  useEffect(() => {
    if (result === 'lost') {
      changeColorButton()
    }
  }, [result])

  function calculateScore(choiceUser, choiceHouse) {
    let newScore
    if (
      (choiceUser === 'paper' && choiceHouse === 'rock') ||
      (choiceUser === 'rock' && choiceHouse === 'scissors') ||
      (choiceUser === 'scissors' && choiceHouse === 'paper')
    ) {
      newScore = score + 1
      setScore(newScore)
      setResult('won')
      displayCircles('won')
    } else if (choiceUser === choiceHouse) {
      newScore = score
      setResult('draw')
    } else {
      newScore = score - 1
      setScore(newScore)
      setResult('lost')
      displayCircles('lost')
    }

    localStorage.setItem('score', newScore)
    displayResult()
  }

  function displayCircles(result) {
    let user
    if (result === 'won') {
      user = 'user'
    }
    if (result === 'lost') {
      user = 'house'
    }

    const elements = document.getElementsByClassName(user)

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('visible')
    }
  }

  function displayResult() {
    const screenWidth = window.screen.width
    if (screenWidth <= 700) {
      toggleShowResultMobile(true)
    } else {
      toggleShowResultDesktop(true)
    }
  }

  function changeColorButton() {
    document.getElementsByClassName(
      'result-section'
    )[0].children[0].style.color = 'var(--rockGradientFrom)'
  }

  return (
    <div className="game-page-container">
      <div className="choices-wrapper">
        <section className="choice-section">
          <p>YOU PICKED</p>
          <div className="choice-area-wrapper">
            <GameButtonNoClick imageSrc={userChoice} user={'user'} />
          </div>
        </section>

        {showResultDesktop && (
          <div className="result-container">
            <ResultGame result={result} restartGame={restartGame} />
          </div>
        )}
        <section className="choice-section">
          <p>THE HOUSE PICKED</p>
          <div className="choice-area-wrapper">
            <div className="circle1"></div>
            {houseChoice && (
              <GameButtonNoClick imageSrc={houseChoice} user={'house'} />
            )}
          </div>
        </section>
      </div>

      <div className="result-container-mobile">
        {showResultMobile && (
          <ResultGame result={result} restartGame={restartGame} />
        )}
      </div>
    </div>
  )
}

export default Game
