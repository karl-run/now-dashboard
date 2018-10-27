import { GET_OPTIONS } from './options'
import { ErrorableRequest } from './types'
import { DeploymentType } from './deployments'

const createUrl = (uid: string) =>
  `https://api.zeit.co/v3/now/deployments/${uid}`

interface Response extends ErrorableRequest, DeploymentType {
  limits: {
    duration: number
    maxConcurrentReqs: number
    timeout: number
  } | null
  sessionAffinity: string | null
}

const fetcher = (uid: string): Promise<Response> => {
  return fetch(createUrl(uid), GET_OPTIONS).then(response => response.json())
}

export default fetcher
