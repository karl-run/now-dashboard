import React from 'react'
import { Trail, Spring, config } from 'react-spring'

import SlideIn from '../animations/SlideIn'
import Shake from '../animations/Shake'

import css from './Splash.module.css'

const Splash = () => (
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
            <div style={{ ...slide, ...shake }}>
              <h2>Log in to get started</h2>
            </div>
          )}
        </Shake>
      )}
    </SlideIn>
  </div>
)

export default Splash
