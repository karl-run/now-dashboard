import React from 'react'
import groupBy from 'lodash.groupby'

import { useDeployments } from '../../fetcher'
import { DeploymentType } from '../../fetcher/deployments'

import Deployment from './deployment/Deployment'

import css from './Deployments.module.css'

interface DeploymentGroupProps {
  name: string
  deployments: Array<DeploymentType>
}

const DeploymentGroup = ({ name, deployments }: DeploymentGroupProps) => {
  return (
    <>
      <h3>{name}</h3>
      <div className={css.root}>
        {deployments.map(deployment => {
          return <Deployment key={deployment.uid} deployment={deployment} />
        })}
      </div>
    </>
  )
}

const Deployments = () => {
  const { data, loading, error } = useDeployments()

  if (loading) return <div>Loading...</div>

  if (error || data.deployments == null) {
    return <div>Oops: {error || 'Unknown error'}</div>
  }

  const groupedDeployments = groupBy(data.deployments, 'type')

  console.log(groupedDeployments)

  return (
    <div>
      {Object.keys(groupedDeployments).map(key => (
        <DeploymentGroup
          key={key}
          name={key}
          deployments={groupedDeployments[key]}
        />
      ))}
    </div>
  )
}

export default Deployments
