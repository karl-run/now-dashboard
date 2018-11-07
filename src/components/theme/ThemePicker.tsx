// @ts-ignore
import React, { useState } from 'react'
import { Trail, Transition } from 'react-spring'
import cn from 'classnames'

import SlideIn from '../animations/SlideIn'

import { availableThemes } from './themes'
import css from './ThemePicker.module.css'

interface Props {
  onThemeChange: (theme: string) => void
  selected: string | null
}

const ThemePicker = ({ onThemeChange, selected }: Props) => {
  const [open, setOpen] = useState(true)

  return (
    <SlideIn horizontal={false} offset={20} delay={500}>
      {props => (
        <div
          style={props}
          className={css.themePicker}
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div>Theme</div>
          <div className={css.optionsBox}>
            <Transition
              items={open ? availableThemes : []}
              from={{ transform: 'translateX(-40px)', opacity: 0 }}
              enter={{ transform: 'translateX(0px)', opacity: 1 }}
              leave={{ transform: 'translateX(-40px)', opacity: 0 }}
              // @ts-ignore
              trail={37}
              unique
            >
              {theme => props => (
                <button
                  style={props}
                  className={cn({ [css.selectedOption]: selected === theme })}
                  onClick={() => onThemeChange(theme)}
                >
                  {theme}
                </button>
              )}
            </Transition>
          </div>
        </div>
      )}
    </SlideIn>
  )
}

export default ThemePicker
