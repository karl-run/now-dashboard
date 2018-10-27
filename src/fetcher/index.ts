import deployments from './fetchers/deployments'
import deployment from './fetchers/deployment'
import instances from './fetchers/instances'
import hook from './hook'

const useDeployments = hook(deployments)
const useDeployment = hook(deployment)
const useInstances = hook(instances)

export { useDeployments, useDeployment, useInstances }
