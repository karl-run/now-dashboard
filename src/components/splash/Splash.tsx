import React from 'react'
import { Trail, Spring, config } from 'react-spring'

import SlideIn from '../animations/SlideIn'
import Shake from '../animations/Shake'

import css from './Splash.module.css'

interface Props {
  onLoginClick: () => void
}

const Splash = ({ onLoginClick }: Props) => (
  <div className={css.splash}>
    <SlideIn delay={350}>
      {props => <h1 style={props}>A real time dashboard for zeit's now</h1>}
    </SlideIn>
    <SlideIn delay={700}>
      {props => (
        <div style={props}>
          <img src="/splash.png" />
        </div>
      )}
    </SlideIn>
    <SlideIn delay={2100} offset={0}>
      {slide => (
        <Shake interval={2500}>
          {shake => (
            <button
              style={{ ...slide, ...shake }}
              type="button"
              onClick={onLoginClick}
            >
              <h2>Log in to get started</h2>
            </button>
          )}
        </Shake>
      )}
    </SlideIn>
  </div>
)

export default Splash
