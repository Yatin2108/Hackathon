var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./test/specs/e2e.spec.js"],
  services: [['browserstack', {
    testObservability: true,
    testObservabilityOptions: {
        'projectName': "browserstack-percy-appium-webdriverio",
        'buildName': process.env.BROWSERSTACK_BUILD_NAME || "browserstack-percy-appium-webdriverio" + " - " + new Date().getTime(),
    },
}]],

  commonCapabilities: {
    "browserstack.debug": true,
    build:
      process.env.BROWSERSTACK_BUILD_NAME ||
      "browserstack-percy-appium-webdriverio" + " - " + new Date().getTime(),
    project: "browserstack-percy-appium-webdriverio",
  },

  capabilities: [
    {
      device: "Google Pixel 7",
      os_version: "13.0",
      app: "bs://03497b00841d6c1b6e405f2bfeb4c91042acf8e7",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      device: "Samsung Galaxy A51",
      os_version: "10.0",
      app:"bs://03497b00841d6c1b6e405f2bfeb4c91042acf8e7",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      device: "iPhone 12 Pro",
      platformName: "iOS",
      os_version: "14",
      gpsEnabled: "true",
      automationName: "XCUITest",
      app:"bs://c7d5587d822f8dab1d31bb81a0c7cb1fa050e098",
    },
    {
      device: "iPhone 12 Mini",
      platformName: "iOS",
      os_version: "14",
      gpsEnabled: "true",
      automationName: "XCUITest",
      app: "bs://c7d5587d822f8dab1d31bb81a0c7cb1fa050e098",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
