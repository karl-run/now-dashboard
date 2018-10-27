import deployments from './fetchers/deployments'
import deployment from './fetchers/deployment'
import instances from './fetchers/instances'
import hook from './hook'

const useDeployments = hook(deployments, { refetch: 5000 })
const useDeployment = hook(deployment)
const useInstances = hook(instances, { refetch: 2500 })

export { useDeployments, useDeployment, useInstances }
