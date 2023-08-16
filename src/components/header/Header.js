import React from 'react'
import logo from '../../images/logo.svg'
import './Header.css'

const header = ({ score, setScore }) => {

  function resetCount() {
    setScore(0)
    localStorage.clear();
  }
  return (
    <div className="header-container">
      <div className="header-wrapper" onClick={resetCount}>
        <img src={logo} alt="logo" />

        <section className="score-wrapper">
          <p>Score</p>
          <p className="score-number">{score}</p>
        </section>
      </div>
    </div>
  )
}

export default header
