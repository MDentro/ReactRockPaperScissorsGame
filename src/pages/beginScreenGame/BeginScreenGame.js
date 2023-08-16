import React from 'react'
import GameButton from '../../components/gameButton/GameButton'
import './BeginScreenGame.css'
import bgTriangle from '../../images/bg-triangle.svg'

const BeginScreenGame = ({ setUserChoice, handleBeginScreenGame }) => {
  function handleGameButtonClick(choice) {
    setUserChoice(choice)
    handleBeginScreenGame()
  }
  return (
    <div className="begin-screen-game-page-container">
      <div
        className="begin-screen-game-page-wrapper"
        style={{
          backgroundImage: 'url(' + bgTriangle + ')',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '60%',
          backgroundPosition: 'center',
        }}>
        <div className="button-wrapper">
          <div className="game-button-container">
            <GameButton
              imageSrc={'paper'}
              handleGameButtonClick={handleGameButtonClick}
            />
          </div>
          <div className="game-button-container">
            <GameButton
              imageSrc={'scissors'}
              handleGameButtonClick={handleGameButtonClick}
            />
          </div>
          <div className="game-button-container">
            <GameButton
              imageSrc={'rock'}
              handleGameButtonClick={handleGameButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginScreenGame
