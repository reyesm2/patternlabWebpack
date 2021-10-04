let berkley = berkley || {};
    berkley.constants = berkley.constants || {};

/**
 * Constants available to be used in all modules
 * @type {Object}
 */

berkley.constants = {
    HIDDEN_CLASS: "js-hidden",
    MODULE_CLASS: 'js-module',
    MOBILE_MAX_SIZE: 767,
    VISUALLY_HIDDEN: 'visually-hidden',

    // KEY CODES
    KEY_CODE: {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        ESC: 27,
        SPACE: 32,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
    },

    // Accesibility elements
    A11Y: {
        ARIA_EXPANDED: 'aria-expanded',
        ARIA_CHECKED: 'aria-checked'
    }
};

export default berkley.constants;
