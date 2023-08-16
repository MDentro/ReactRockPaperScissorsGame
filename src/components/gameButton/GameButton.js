import React, { useState, useEffect } from 'react'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import './GameButton.css'

const GameButton = ({ imageSrc, handleGameButtonClick }) => {
  const [src, setSrc] = useState()

  useEffect(() => {
    if (imageSrc === 'rock') {
      setSrc(rock)
    }
    if (imageSrc === 'paper') {
      setSrc(paper)
    }
    if (imageSrc === 'scissors') {
      setSrc(scissors)
    }
  }, [imageSrc])

  return (
    <div
      className={`circle-button-wrapper ${imageSrc}`}
      onClick={() => handleGameButtonClick(`${imageSrc}`)}>
      {src && <img src={src} alt="game-button" className="game-button" />}
    </div>
  )
}

export default GameButton
