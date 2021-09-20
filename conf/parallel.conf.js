
exports.config = {

  // services: [
  //   [
  //     "lambdatest",
  //     {
  //       tunnel: false,

  //       lambdatestOpts: {
  //         logFile: "tunnel.log",
  //         tunnelName: "Prateek"
  //       }
  //     }
  //   ]
  // ],
  user: process.env.LT_USERNAME,
  key: process.env.LT_ACCESS_KEY,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 60,
  commonCapabilities: {
    "LT:Options": {
      "name": "Test",
      "build": "BuildMultiple",

    },
    // "goog:chromeOptions": {
    //   // Install upon starting browser in order to launch it
    //   extensions: [
    //     // Entry should be a base64-encoded packed Chrome app (.crx)
    //     require('fs').readFileSync('E:\\extensions\\3.2.1_0.crx').toString('base64')
    //   ]
    // },

  },

  capabilities: [
    {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },  {
      platformName: "Windows 10",
      browserName: "chrome",

    },
    {
      platformName: "Windows 10",
      browserName: "chrome",

    },
    {
      platformName: "Windows 10",
      browserName: "chrome",

    },

    {
      platformName: "Windows 10",
      browserName: "chrome",

    }
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 9999999,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 9999999  }

};

// Code to support common capabilities
for (var j = 0; j > 200; j++) {
  exports.config.capabilities.forEach(function (caps) {

    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];

  });
};
