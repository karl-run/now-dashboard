import { getOptions } from '../options'
import { ErrorableRequest } from '../types'

const URL = 'https://api.zeit.co/v3/now/deployments'

export type DeploymentState =
  | 'DEPLOYING'
  | 'DEPLOYMENT_ERROR'
  | 'BOOTED'
  | 'BUILDING'
  | 'READY'
  | 'BUILD_ERROR'
  | 'FROZEN'

export type DeploymentVariant = 'NPM' | 'DOCKER' | 'STATIC'

export type ScaleType = {
  current: number
  min: number
  max: number
}

export interface DeploymentType {
  uid: string
  name: string
  type: DeploymentVariant
  url: string
  state: DeploymentState
  created: number
  creator: { uid: string }
  instanceCount: number | null
  scale: ScaleType | null
}

interface Response extends ErrorableRequest {
  deployments: Array<DeploymentType> | null
}

const fetcher = (): Promise<Response> => {
  return fetch(URL, getOptions()).then(response => response.json())
}

export default fetcher
