var berkley = berkley || {};
    berkley.components = berkley.components || {}; 

berkley.components.SkipMainContent = (() => {

    var CONSTATS = {
        MAIN_CONTENT: 'mainContent'
    };

    var isLoaded = false;

    let SkipMainContentComponent =  (module) => {

        let init  = () => {
            console.log('SkipMainContent - loaded:',module);
        }

        init();
    }

    return SkipMainContentComponent;
})();

export default berkley.components.SkipMainContent;