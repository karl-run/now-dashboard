import React, { useState, useEffect } from 'react'
import { Spring, Keyframes, config } from 'react-spring'
import delay from 'delay'

interface Props {
  interval?: number
  children: (props: any) => any
}

const Wiggle = Keyframes.Spring(async (next: any, _: any, ownProps: any) => {
  while (true) {
    await next({ right: 3, config: { duration: 69 } })
    await next({ right: -3, config: { duration: 69 } })
    await next({ right: 3, config: { duration: 69 } })
    await next({ right: -3, config: { duration: 69 } })
    await next({ right: 0, config: { duration: 69 } })
    await delay(ownProps.interval)
  }
})

const Shake = ({ interval = 1000, children }: Props) => (
  // @ts-ignore
  <Wiggle interval={interval}>
    {(props: any) => children({ position: 'relative', ...props })}
  </Wiggle>
)

export default Shake
