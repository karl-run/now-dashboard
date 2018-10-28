import React from 'react'
import { Spring } from 'react-spring'

interface Props {
  delay?: number
  offset?: number
  children: (props: any) => any
}

const SlideIn = ({ delay = 0, offset = 40, children }: Props) => (
  <Spring
    from={{ opacity: 0, transform: `translateX(-${offset}px)` }}
    to={{ opacity: 1, transform: 'translateX(0px)' }}
    config={{ delay }}
  >
    {props => children(props)}
  </Spring>
)

export default SlideIn
