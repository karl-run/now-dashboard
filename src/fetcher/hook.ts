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
    const [errorCount, setErrorCount] = React.useState(0)

    const doFetch = () => {
      fetchPromise(...args).then(result => {
        if (!result.error) {
          setData({ loading: false, data: result, error: null })
        } else {
          if (!(!options || options.refetch == null) && errorCount < 3) {
            setErrorCount(errorCount + 1)
            return
          }

          setData({ loading: false, data: null, error: result.error.message })
        }
      })
    }

    useEffect(() => {
      if (!options || options.refetch == null) return

      const intervalId = setTimeout(doFetch, options.refetch)

      return () => {
        clearTimeout(intervalId)
      }
    })

    if (data.loading == false) return { ...data }

    if (errorCount === 0) {
      doFetch()
    }

    return { ...data }
  }
}

export default hookCreator
