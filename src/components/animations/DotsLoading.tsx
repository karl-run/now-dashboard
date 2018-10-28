import React from 'react'
import { config, Keyframes } from 'react-spring'

const LoopCounter = Keyframes.Spring(async (next: any) => {
  while (true) {
    await next({ count: 3, from: { count: 0 }, reset: true })
  }
})

const DotsLoading = () => (
  <LoopCounter config={{ duration: 900 }}>
    {(props: any) => (
      <span style={{ position: 'absolute' }}>
        {'.'.repeat(Math.round(props.count))}
      </span>
    )}
  </LoopCounter>
)

export default DotsLoading
