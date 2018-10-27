import React from 'react'

import {
  DeploymentType,
  DeploymentState,
  DeploymentVariant,
} from '../../../fetcher/deployments'

import css from './Deployment.module.css'

const TypeIcon = ({ type }: { type: DeploymentVariant }) => {
  let icon
  switch (type) {
    case 'DOCKER':
      icon = 'D'
      break
    case 'NPM':
      icon = 'N'
      break
    case 'STATIC':
      icon = 'S'
      break
  }

  return (
    <div className={css.typeIcon} title={type}>
      {icon}
    </div>
  )
}

const DeploymentStatus = ({ state }: { state: DeploymentState }) => {
  let className
  switch (state) {
    case 'READY':
      className = css.buildReady
      break
    case 'BUILD_ERROR':
      className = css.buildError
      break
    default:
      className = ''
      break
  }

  return <div className={className}>{state}</div>
}

const Deployment = ({ deployment }: { deployment: DeploymentType }) => {
  return (
    <div className={css.root}>
      <div className={css.top}>
        <TypeIcon type={deployment.type} />
        <a href={'https://' + deployment.url}>{deployment.name}</a>
        <DeploymentStatus state={deployment.state} />
      </div>
      <div>Instances: {deployment.instanceCount}</div>
    </div>
  )
}

export default Deployment
