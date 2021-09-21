// ==================== UTILS =========================

import constants from '../global/berkley.constants';
import components from '../components';

let berkley = berkley || {};
    berkley.utils = berkley.utils || {}; 

berkley.utils.initializeModules = ((root) => {

    let parentNode = root ? root : document,
        modules = parentNode.getElementsByClassName(constants.MODULE_CLASS);

    for (let modulesIndex = 0; modulesIndex < modules.length; modulesIndex++) {
        let module = modules[modulesIndex];

        if (module.dataset.moduleStarted !== 'true') {
            let loadModule = module.dataset.moduleLoad;

            if (loadModule !== 'false') {
                let moduleName = module.dataset.module;

                module.dataset.moduleStarted = 'true';

                if (moduleName) {
                    let newModule = new components[moduleName](module);
                }
            }
        }
    }
});

export default berkley.utils;