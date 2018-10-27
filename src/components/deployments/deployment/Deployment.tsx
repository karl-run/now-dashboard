import React, { useState } from 'react'
import cn from 'classnames'

import {
  DeploymentType,
  DeploymentState,
  DeploymentVariant,
} from '../../../fetcher/deployments'
import DeploymentDetails from './deploymentdetails/DeploymentDetails'

import css from './Deployment.module.css'

const DetailsButton = ({
  onClick,
  isActive,
}: {
  onClick: (event: any) => void
  isActive: boolean
}) => (
  <button className={css.detailsButton} onClick={onClick}>
    {!isActive ? 'Show' : 'Hide'} details
    <i className="material-icons">
      {isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
    </i>
  </button>
)

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
  const [detailView, setDetailsView] = useState(false)

  const toggleState = () => {
    setDetailsView(!detailView)
  }

  return (
    <div className={cn(css.root, { [css.detailsView]: detailView })}>
      <div className={css.top}>
        <TypeIcon type={deployment.type} />
        <a href={'https://' + deployment.url}>{deployment.name}</a>
        <DeploymentStatus state={deployment.state} />
      </div>
      {deployment.type !== 'STATIC' && (
        <div>
          Instances:{' '}
          {deployment.instanceCount == null ? 'None' : deployment.instanceCount}
        </div>
      )}
      {detailView && <DeploymentDetails uid={deployment.uid} />}
      <DetailsButton onClick={toggleState} isActive={detailView} />
    </div>
  )
}

export default Deployment
