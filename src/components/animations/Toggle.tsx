import React from 'react'
import { Transition } from 'react-spring'

interface Props {
  show: boolean
  children: (show: boolean) => (props: any) => any
}

const Toggle = ({ show, children }: Props) => (
  <Transition
    from={{ opacity: 0, top: -20 }}
    enter={{ opacity: 1, top: 0 }}
    leave={{ opacity: 0, top: 20 }}
    items={show}
  >
    {show => children(show)}
  </Transition>
)

export default Toggle
