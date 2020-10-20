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
  specs: ["./tests/specs/single_test.js"],
  exclude: [],
  capabilities: [
    {
      
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      build: "build 1",
      network: false,
      video: true,
      visual: false,
      console: false
    }
  ],
  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd"
  }
};