import deployments from './deployments';
import hook from './hook';

const useDeployments = hook(deployments);

export {
    useDeployments,
}
