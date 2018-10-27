import deployments from './deployments'
import deployment from './deployment'
import hook from './hook'

const useDeployments = hook(deployments)
const useDeployment = hook(deployment)

export { useDeployments, useDeployment }
