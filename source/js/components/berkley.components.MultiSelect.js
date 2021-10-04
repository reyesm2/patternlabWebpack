import constants from '../global/berkley.constants';
import utils from '../utils/berkley.utils';

let berkley = berkley || {};
    berkley.components = berkley.components || {};

let CONSTANTS = {
    DROPDOWN_BUTTON: 'js-dropdown-button',
    DROPDOWN_CLEAR_BUTTON: 'js-dropdown-clear-button',
    DROPDOWN_LIST: 'js-dropdown-list',
    DROPDOWN_LIST_OPTION: 'js-dropdown-option',
    FOCUSABLE_OPTION: 'js-focusable-option',
    DROPDOWN_OPTION_INPUT: 'js-dropdown-option-input',

    // Carbon Elements
    LIST_BOX_EXPANDED: 'bx--list-box--expanded'
};

berkley.components.MultiSelect = ((multiSelectModule) => {

    let $dropdownButton,
        $dropdownList,
        $dropdownClearButton;

    /**
     * Determinate if the list of dropdown list is display.
     * @returns Boolean
     */
    let isOpenDropdown = () => {
        return (($dropdownButton.getAttribute(constants.A11Y.ARIA_EXPANDED) == 'true') 
            ? false : true);
    }

    /**
     * Funtion: Display dropdown list through the state of aria-expanded.
     * @param {Event} event 
     */
    let toggleDropdownList = (event) => {
        event.preventDefault();
        $dropdownButton.setAttribute(constants.A11Y.ARIA_EXPANDED, isOpenDropdown());
        
        isOpenDropdown ? $dropdownButton.parentElement.classList.add(CONSTANTS.LIST_BOX_EXPANDED) 
            : $dropdownButton.parentElement.classList.remove(CONSTANTS.LIST_BOX_EXPANDED);
    }

    /**
     * Funtion: Get first element and focus this element.
     */
    let focusFirstElementList = () => {
        $dropdownList.getElementsByClassName(CONSTANTS.DROPDOWN_LIST_OPTION)[0].focus();
    }

    /**
     * 
     * @param {HTMLCollection} listElements Parent element that have a list of elements
     * @param {HTMLEvent} event Default event
     */
    let handlerKeyArrow = (listElements, event) => {

        let elements = listElements.getElementsByClassName(CONSTANTS.FOCUSABLE_OPTION),
            position = utils.getPositionHTMLCollection(elements, event.target);
        
        switch (event.keyCode) {
            case constants.KEY_CODE.RIGHT:
            case constants.KEY_CODE.DOWN:
                position = (position+1) % elements.length;
                elements[position].focus();
            break;
            case constants.KEY_CODE.LEFT:
            case constants.KEY_CODE.UP:
                position = ((position-1) + elements.length) % elements.length;
                elements[position].focus();
            break;
        }
    }

    /**
     * Hardler that allow open/close and focus the list of option with left or down key arrow
     * @param {Default Event} event 
     */
    let keyboardHandlerDropdown = (event) => {  

        switch (event.keyCode) {
            case constants.KEY_CODE.ENTER:
                toggleDropdownList(event);
            break;
            case constants.KEY_CODE.SPACE:
                toggleDropdownList(event);
            break;
            case constants.KEY_CODE.RIGHT:
            case constants.KEY_CODE.DOWN:
                focusFirstElementList();
            break;
        }
    }

    /**
     * Handler the interaction with the options of multi select.
     * @param {Default Event} event 
     */
    let handlerSelectionOption = (event) => {
        let input = event.target.getElementsByClassName(CONSTANTS.DROPDOWN_OPTION_INPUT)[0],
            span = $dropdownClearButton.getElementsByTagName('span')[0],
            spanContent = parseInt(span.textContent),
            isChecked;
        
        input.getAttribute(constants.A11Y.ARIA_CHECKED) == 'true' ? 
            isChecked = false: isChecked = true;
        
        if(isChecked){
            input.setAttribute('checked','');
            span.textContent = spanContent+1;
            $dropdownClearButton.classList.remove(constants.VISUALLY_HIDDEN);
        }else {
            input.removeAttribute('checked');
            if (spanContent ==  1) {
                $dropdownClearButton.classList.add(constants.VISUALLY_HIDDEN);
                span.textContent = spanContent-1;
            } else {
                span.textContent = spanContent-1;
            }
        }

        input.parentElement.setAttribute('data-contained-checkbox-state', isChecked);
        input.setAttribute(constants.A11Y.ARIA_CHECKED, isChecked);
    }

    let initializeData = () => {
        $dropdownButton = multiSelectModule.getElementsByClassName(CONSTANTS.DROPDOWN_BUTTON)[0];
        $dropdownClearButton = multiSelectModule.getElementsByClassName(CONSTANTS.DROPDOWN_CLEAR_BUTTON)[0];
        $dropdownList = multiSelectModule.getElementsByClassName(CONSTANTS.DROPDOWN_LIST)[0];

    }

    let initializeEvents = () => {
        
        $dropdownButton.addEventListener('click', toggleDropdownList);
        $dropdownButton.addEventListener('keydown', keyboardHandlerDropdown);

        $dropdownList.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case constants.KEY_CODE.RIGHT:
                case constants.KEY_CODE.DOWN:
                case constants.KEY_CODE.LEFT:
                case constants.KEY_CODE.UP:
                    handlerKeyArrow($dropdownList, event);
                break;

                case constants.KEY_CODE.SPACE:
                case constants.KEY_CODE.ENTER:
                    handlerSelectionOption(event);
                break;
            }
        });
    }

    /**
     * Inits functionality in the module.
     */
    let init  = () => {
        initializeData();
        initializeEvents();
    }

    init();
});

export default berkley.components.MultiSelect;