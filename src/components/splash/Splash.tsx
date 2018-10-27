import React from 'react'

import css from './Splash.module.css'

interface Props {
  onLoginClick: () => void
}

const Splash = ({ onLoginClick }: Props) => (
  <div className={css.splash}>
    <h1>A real time dashboard for zeit's now</h1>
    <div>
      <img src="/splash.png" />
    </div>
    <button type="button" onClick={onLoginClick}>
      <h2>Log in to get started</h2>
    </button>
  </div>
)

export default Splash
