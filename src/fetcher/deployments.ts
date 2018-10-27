import { GET_OPTIONS } from './options'
import { ErrorableRequest } from './types'

const URL = 'https://api.zeit.co/v3/now/deployments'

interface Deployment {
  uid: string
  name: string
  type: string // TODO type with constants
  url: string
  state: string // TODO type with constants
  created: number
  creator: { uid: string }
  instanceCount: number | null
  scale: any | null
}

interface Response extends ErrorableRequest {
  deployments: Array<Deployment> | null
}

export default (): Promise<Response> => {
  return fetch(URL, GET_OPTIONS).then(response => response.json())
}
