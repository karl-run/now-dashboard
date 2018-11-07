import React, { Component } from 'react'

import Deployments from './deployments/Deployments'
import ThemeLoader from './theme/ThemeLoader'
import ThemePicker from './theme/ThemePicker'
import Login from './login/Login'

import css from './App.module.css'
import Splash from './splash/Splash'

const Source = () => (
  <div className={css.source}>
    <a href="https://github.com/karl-run/now-dashboard">Github Source</a>
  </div>
)

class App extends Component {
  state = {
    hasToken: false,
    theme: null,
  }

  componentDidMount() {
    this.handleStorageChange()
    this.initialThemeLoad()
  }

  handleStorageChange = () => {
    const token = localStorage.getItem('now-token')

    this.setState({ hasToken: !!token })
  }

  handleThemeChange = (theme: string) => {
    localStorage.setItem('app-theme', theme)
    this.setState({ theme })
  }

  initialThemeLoad = () => {
    const theme = localStorage.getItem('app-theme')

    if (theme != null) {
      this.setState({ theme })
      return;
    }

    localStorage.setItem('app-theme', 'dark')
    this.setState({ theme: 'dark' })
    return
  }

  render() {
    return (
      <ThemeLoader theme={this.state.theme}>
        <div className={css.AppRoot}>
          <div className={css.titleHeader}>
            live dashboard for <a href="https://zeit.co/now">zeit now</a>
          </div>
          <div className={css.upperRightCornerBox}>
            <ThemePicker
              onThemeChange={this.handleThemeChange}
              selected={this.state.theme}
            />
            <Login onLoginChange={this.handleStorageChange} />
          </div>
          {this.state.hasToken && <Deployments />}
          {!this.state.hasToken && <Splash />}
          <Source />
        </div>
      </ThemeLoader>
    )
  }
}

export default App
