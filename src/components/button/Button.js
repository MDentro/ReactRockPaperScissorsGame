import React from 'react'
import './Button.css'

const Button = ({ clickHandler, children }) => {
  return <button onClick={clickHandler}>{children}</button>
}

export default Button
