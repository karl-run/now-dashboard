import React from 'react'

import { useDeployments } from '../../fetcher'

const Deployments = () => {
  const { data, loading, error } = useDeployments()

  if (loading) return <div>Loading...</div>

  if (error || data.deployments == null)
    return <div>Oops: {error || 'Unknown error'}</div>

  return (
    <div>
      {data.deployments.map(deployment => {
        return <div key={deployment.uid}>{deployment.name}</div>
      })}
    </div>
  )
}

export default Deployments
