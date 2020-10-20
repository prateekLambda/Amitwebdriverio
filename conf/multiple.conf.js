exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: 'amitkslambdatest',
  key: 'YP67KD00E5dag50FKkodeVLGXQSUwGlM8AW6SKbc5o4UElpLmv',
  specs: [
    './tests/specs/multiple_test.js'
  ],
  exclude: [],
  capabilities: [{
    browser: 'chrome',
    name: 'Multiple Sample Test',
    build: 'WebDriver Selenium Sample'
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: '/wd/hub',
  hostname: 'hub.lambdatest.com',
  port: 80,
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
