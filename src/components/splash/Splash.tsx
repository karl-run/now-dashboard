import React from 'react'

import css from './Splash.module.css'

const Splash = () => (
  <div className={css.splash}>
    <h1>A real time dashboard for zeit's now</h1>
    <div>
      <img src="/splash.png" />
    </div>
    <button>
      <h2>Log in to get started</h2>
    </button>
  </div>
)

export default Splash
