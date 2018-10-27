import React from 'react'

import { useDeployment, useInstances } from '../../../../fetcher'
import { InstanceType } from '../../../../fetcher/fetchers/instances'

import css from './DeploymentDetails.module.css'

const InstanceBar = ({
  name,
  instances,
}: {
  name: string
  instances: Array<InstanceType>
}) => {
  return (
    <div className={css.instanceBarRoot}>
      <div>{name}</div>
      <div className={css.instanceBar}>
        {instances.map(inst => (
          <div key={inst.uid} className={css.instanceBox} />
        ))}
      </div>
      <div>({instances.length})</div>
    </div>
  )
}

const DeploymentIntstances = (props: { uid: string }) => {
  const { data, loading, error } = useInstances(props.uid)

  if (loading) return <div>Loading...</div>

  if (error || data.bru1 == null) {
    return <div>Oops: {error || 'Unknown error'}</div>
  }

  return (
    <div>
      <InstanceBar name="bru" instances={data.bru1.instances} />
      <InstanceBar name="sfo" instances={data.sfo1.instances} />
      <InstanceBar name="iad" instances={data.iad1.instances} />
      <InstanceBar name="gru" instances={data.gru1.instances} />
    </div>
  )
}

interface Props {
  uid: string
  instanceCount: number | null
}

const DeploymentDetails = (props: Props) => {
  const { data, loading, error } = useDeployment(props.uid)

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
      <DeploymentIntstances uid={props.uid} />
    </div>
  )
}

export default DeploymentDetails
