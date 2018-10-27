import React, { useEffect } from 'react'
import { ErrorableRequest } from './types'

interface HookOptions {
  refetch: number | null
}

interface ResultWithLoading<T> {
  loading: boolean
  data: T
  error: { message: string } | null
}

type FetchPromise<T> = (...args: any[]) => Promise<T>

function hookCreator<Y extends ErrorableRequest>(
  fetchPromise: FetchPromise<Y>,
  options?: HookOptions,
): ((...args: any[]) => ResultWithLoading<Y>) {
  return (...args: any[]) => {
    const [data, setData] = React.useState({ data: null, loading: true })

    const doFetch = () => {
      fetchPromise(...args).then(result => {
        if (!result.error) {
          setData({ loading: false, data: result, error: null })
        } else {
          setData({ loading: false, data: null, error: result.error.message })
        }
      })
    }

    useEffect(() => {
      if (!options) return
      if (options.refetch == null) return

      const intervalId = setTimeout(doFetch, options.refetch)

      return () => {
        clearInterval(intervalId)
      }
    })

    if (data.loading == false) return { ...data }

    doFetch()

    return { ...data }
  }
}

export default hookCreator
