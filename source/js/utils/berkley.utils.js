import constants from '../global/berkley.constants';

let berkley = berkley || {};
    berkley.utils = berkley.utils || {}; 

/**
 * Checks if device is mobile.
 * @return {Boolean} True if device is mobile, false if not.
*/
berkley.utils.isMobile =  (() => {
    return window.innerWidth <= constants.MOBILE_MAX_SIZE;
});

export default berkley.utils;