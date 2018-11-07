// @ts-ignore
import React, { Component } from 'react'
import getTheme from './themes'

interface Props {
  theme: 'light' | 'dark' | null
}

class ThemeLoader extends Component<Props> {
  componentDidUpdate(prevProps: any) {
    if (prevProps.theme !== this.props.theme) {
      this.updateCssVariables(getTheme(this.props.theme))
    }
  }

  updateCssVariables(variables: { [key: string]: string }) {
    Object.keys(variables).forEach((key: string) => {
      if (document == null || document.documentElement == null) return

      document.documentElement.style.setProperty(`--${key}`, variables[key])
    })
  }

  render() {
    if (this.props.theme == null) return null

    return this.props.children
  }
}

export default ThemeLoader
