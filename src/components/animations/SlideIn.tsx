import React from 'react'
import { Spring } from 'react-spring'

interface Props {
  delay?: number
  offset?: number
  horizontal?: boolean
  children: (props: any) => any
}

const SlideIn = ({
  delay = 0,
  offset = 40,
  horizontal = true,
  children,
}: Props) => {
  const from = {
    opacity: 0,
    transform: `translate${horizontal ? 'X' : 'Y'}(-${offset}px)`,
  }

  const to = {
    opacity: 1,
    transform: `translate${horizontal ? 'X' : 'Y'}(0px)`,
  }

  return (
    <Spring from={from} to={to} config={{ delay }}>
      {props => children(props)}
    </Spring>
  )
}

export default SlideIn
