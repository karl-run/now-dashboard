import React from 'react'

import { useDeployment } from '../../../../fetcher'

interface Props {
  uid: string
}

const DeploymentDetails = (props: Props) => {
  const { data, loading, error } = useDeployment(props.uid)

  console.log(data)
  if (loading) return <div>Loading...</div>

  if (error || data.uid == null) {
    return <div>Oops: {error || 'Unknown error'}</div>
  }

  return (
    <div>
      {data.limits && (
        <div>
          <div>Max concurrent requests: {data.limits.maxConcurrentReqs}</div>
          <div>Duration: {data.limits.duration}</div>
          <div>Timeout: {data.limits.timeout}</div>
        </div>
      )}
    </div>
  )
}

export default DeploymentDetails
