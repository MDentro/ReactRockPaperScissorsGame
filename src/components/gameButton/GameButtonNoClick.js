import React, { useState, useEffect } from 'react'
import rock from '../../images/icon-rock.svg'
import paper from '../../images/icon-paper.svg'
import scissors from '../../images/icon-scissors.svg'
import './GameButton.css'

const GameButtonNoClick = ({ imageSrc, user }) => {
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
    <div className="circles-wrapper">
      <div className={`circle5 ${user}`}> </div>
      <div className={`circle4 ${user}`}> </div>
      <div className={`circle3 ${user}`}> </div>
      <div className={`circle2 ${imageSrc}`}></div>

      {src && <img src={src} alt="game-button" className="game-button" />}
    </div>
  )
}

export default GameButtonNoClick
