import React, { Component } from 'react'

import Deployments from './deployments/Deployments'
import Login from './login/Login'

import css from './App.module.css'

const Source = () => (
  <div className={css.source}>
    <a href="https://github.com/karl-run/now-dashboard">Github Source</a>
  </div>
)

class App extends Component {
  state = {
    hasToken: false,
  }

  componentDidMount() {
    this.handleStorageChange()
  }

  handleStorageChange = () => {
    const token = localStorage.getItem('now-token')

    this.setState({ hasToken: !!token })
  }

  render() {
    return (
      <div className={css.AppRoot}>
        <div>
          live dashboard for <a href="https://zeit.co/now">zeit now</a>
        </div>
        <Login onLoginChange={this.handleStorageChange} />
        {this.state.hasToken && <Deployments />}
        <Source />
      </div>
    )
  }
}

export default App
