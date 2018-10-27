import React, { Component } from 'react'

import css from './App.module.css'
import Deployments from './deployments/Deployments'

class App extends Component {
  render() {
    return (
      <div className={css.AppRoot}>
        <Deployments />
      </div>
    )
  }
}

export default App
