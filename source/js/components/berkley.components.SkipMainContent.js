let berkley = berkley || {};
    berkley.components = berkley.components || {}; 

berkley.components.SkipMainContent = (() => {

    let CONSTATS = {
        MAIN_CONTENT: 'mainContent'
    };

    let isLoaded = false;

    let SkipMainContentComponent =  (module) => {

        let init  = () => {
            console.log('SkipMainContent - loaded:',module, isLoaded, CONSTATS.MAIN_CONTENT);
        }

        init();
    }

    return SkipMainContentComponent;
})();

export default berkley.components.SkipMainContent;