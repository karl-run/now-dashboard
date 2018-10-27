import React from 'react'
import { ErrorableRequest } from './types'

interface ResultWithLoading<T> {
  loading: boolean
  data: T
  error: { message: string } | null
}

type FetchPromise<T> = () => Promise<T>

function hookCreator<Y extends ErrorableRequest>(
  fetchPromise: FetchPromise<Y>,
): (() => ResultWithLoading<Y>) {
  return () => {
    const [data, setData] = React.useState({ data: null, loading: true })

    if (data.loading == false) return { ...data }

    fetchPromise().then(result => {
      if (!result.error) {
        setData({ loading: false, data: result, error: null })
      } else {
        setData({ loading: false, data: null, error: result.error.message })
      }
    })

    return { ...data }
  }
}

export default hookCreator
