exports.config = {
    specs: ['./e2e/apitest.js'],
    seleniumServerJar: './e2e/lib/selenium-server-standalone-2.53.0.jar',

    chromeDriver: './e2e/lib/chromedriver.exe',

    directConnect: true,

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 240000
    },
};