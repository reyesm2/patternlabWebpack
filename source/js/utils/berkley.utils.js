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

/**
 * Get position of HTML element in to the HMTLCollection
 * @param {HTMLCollection} listElements List of elements HTMLCollection
 * @param {HTMLElement} element HTML element
 * @return {Integer} Value of HTMLElement in HTMLCollection
 */
berkley.utils.getPositionHTMLCollection = ((htmlCollection, element) => {
    for (let index = 0; index < htmlCollection.length; index++) {
        if (htmlCollection[index] == element){
            return index;
        }
    }
});


export default berkley.utils;