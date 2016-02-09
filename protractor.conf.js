exports.config = {
    specs: ['app-spec.js'],

    framework: 'jasmine',

    jasmineNodeOpts: {
        showTiming: true,
        showColors: true,
        isVerbose: false,
        includeStackTrace: true
    },
    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        browser.ignoreSynchronization = false;
    },

    useAllAngular2AppRoots: true
};
