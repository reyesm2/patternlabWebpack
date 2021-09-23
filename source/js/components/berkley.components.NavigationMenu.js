import utils from '../utils/berkley.utils';

let berkley = berkley || {};
    berkley.components = berkley.components || {}; 

berkley.components.NavigationMenu = ((module) => {

    let init  = () => {
        console.log('NavigationMenu - loaded:', module, utils.isMobile());
    }

    init();
});

export default berkley.components.NavigationMenu;