import * as React from 'react'

declare module 'react' {
  export function useState(defaultState: any): any
  export function useEffect(effect: any): any
}
