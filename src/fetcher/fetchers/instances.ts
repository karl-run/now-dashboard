import { getOptions } from '../options'
import { ErrorableRequest } from '../types'
import { DeploymentType } from './deployments'

const createUrl = (uid: string) =>
  `https://api.zeit.co/v3/now/deployments/${uid}/instances`

export type RegionInstances = {
  instances: Array<InstanceType>
}

export type InstanceType = {
  uid: string
  url: string
}

interface Response extends ErrorableRequest {
  bru1: RegionInstances
  gru1: RegionInstances
  iad1: RegionInstances
  sfo1: RegionInstances
}

const fetcher = (uid: string): Promise<Response> => {
  return fetch(createUrl(uid), getOptions()).then(response => response.json())
}

export default fetcher
