import React, { useState } from 'react'
import rules from '../../images/image-rules.svg'
import closeButton from '../..//images/icon-close.svg'
import './Rules.css'

const Rules = ({ showRules }) => {
  const [overlayActive, setOverlayActive] = useState(true)

  function close() {
    setOverlayActive(false)
    showRules()
  }
  return (
    <div className="rules-container">
      <div
        className={overlayActive ? 'overlay-visible' : 'overlay'}
        onClick={close}></div>
      <div className="rules-wrapper">
        <p>RULES</p>

        <img src={rules} alt="rules" />
        <img
          className="close-button"
          src={closeButton}
          alt="close button"
          onClick={() => close()}
        />
      </div>
    </div>
  )
}

export default Rules
