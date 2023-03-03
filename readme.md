![Logo](https://www.browserstack.com/images/static/header-logo.jpg)

# BrowserStack Examples Appium WebdriverIO <a href="https://webdriver.io/"><img src="https://avatars.githubusercontent.com/u/72550141?s=48&v=4" alt="WebdriverIO" height="22" /></a> <a href="https://nodejs.org/en/"><img src="https://brandslogos.com/wp-content/uploads/images/large/nodejs-icon-logo.png" alt="nodejs" height="22" /></a> <a href="https://mochajs.org/"><img src="https://brandslogos.com/wp-content/uploads/images/large/mocha-logo.png" alt="mochs" height="22" /></a>

## Introduction

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

This BrowserStack Example repository demonstrates a WebdriverIO tests framework written in Mocha and nodeJS with parallel testing capabilities. The WebdriverIO test scripts are written for the open source [todo](todo).This BrowserStack Demo Mobile App is an e-commerce mobile application which showcases multiple real-world user scenarios. The app is bundled with offers data, orders data and products data that contains everything you need to start using the app and run tests out-of-the-box.

The WebDriverIO tests are run on different platforms like on-prem and BrowserStack using various run configurations and test capabilities.

---

## Repository setup

- Clone the repository

- Ensure you have the following dependencies installed on the machine
  - NodeJS >= 16.11.1 (includes npm 8.0.0)

- Run below command to configure dependencies

    ```sh
    npm install
    ```
## About the tests in this repository

This repository contains the following WebdriverIO tests:
| Module   | Test name                          | Description |
| ---      | ---                                | --- |
| E2E      | e2e.spec.js                       | This test scenario verifies successful product purchase lifecycle end-to-end. It demonstrates the [Page Object Model design pattern](https://www.browserstack.com/guide/page-object-model-in-selenium) and is also the default test executed in all the single test run profiles. |
| Login    | login.spec.js                       | This test verifies the login workflow with different types of valid login users. |
| Login    | login_data_driven.spec.js             | This test verifies the login for all error cases in a datadriven way |
| Login    | login_requested.spec.js              | This test verifies that the login page is shown when you access the favourites page with being logged in  |
| Offers   | offers.spec.js                       | This test mocks the GPS location for Singapore and verifies that the product offers applicable for the Singapore location are shown.   |
| User     | user.spec.js                        | The first test verifies that existing orders are shown for user: "existing_orders_user". The second test verifies if a user can add product to the favourites. |

# BrowserStack

[BrowserStack](https://browserstack.com) provides instant access to 2,000+ real mobile devices and browsers on a highly reliable cloud infrastructure that effortlessly scales as testing needs grow.

## Prerequisites
- Create a new [BrowserStack account](https://www.browserstack.com/users/sign_up) or use an existing one.
- Identify your BrowserStack username and access key from the [BrowserStack App Automate Dashboard](https://app-automate.browserstack.com/) and export them as environment variables using the below commands.

   - For \*nix based and Mac machines:

      ```sh
      export BROWSERSTACK_USERNAME=<browserstack-username> &&
      export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
      ```

   - For Windows:

      ```shell
      set BROWSERSTACK_USERNAME=<browserstack-username>
      set BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
      ```
Alternatively, you can also hardcode username and access_key objects in the [wdio*.conf.js](resources/conf/) files.

> Note:
> - We have configured the capabilities in [wdio*.conf.js](resources/conf) files. You can certainly update them based on your device test requirements.
> - The exact test capability values can be easily identified using the [Browserstack Capability Generator](https://browserstack.com/app-automate/capabilities)

## Running Your Tests on BrowserStack

### Prerequisites

You need to upload the `APK` or `IPA` to BrowserStack, before you can run the test on BrowserStack. BrowserStack will provide you with an `app_url` which you need to use.

You can upload the `APK` or `IPA` using a file on your filesystem or using a public url.

cURL command: 
``` shell
curl -u "browserstack_username:browserstack_access_key" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "file=@/path/to/ipa/or/apk" \
-F "custom_id=BrowserStackDemoApp"
```

More information on [Upload apps from filesystem](https://www.browserstack.com/docs/app-automate/appium/upload-app-from-filesystem), [Upload apps using public URL](https://www.browserstack.com/docs/app-automate/appium/upload-app-using-public-url) or [Define custom ID for app](https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id).

### Run the entire test suite in parallel on a single BrowserStack device

In this section, we will run the E2E tests in parallel on a multiple device on Browserstack. Refer to `capabilities` object in `resources/conf/wdio-bstack.conf.js` file to change test capabilities for this configuration.

- How to run the test??

  - To run the entire test suite in parallel on a single BrowserStack device type, use the following command:
    ```sh
    npm run bstack-single
    ```
> Note: By default, this execution would run maximum 2 test threads in parallel on BrowserStack. The parallels can eb modified by updated the `maxInstances` inside `capabilities` object in `resources/conf/wdio-bstack.conf.js`.

### Run the the App-Percy Test Suite

In this section, we will run the E2E App-Percy Visual Regression Tests. Refer to `capabilities` object in `resources/conf/wdio-bstack.conf.js` file to change test capabilities for this configuration.

- How to run the test?

  - To run your App-Percy Visual Regression Test Suite across BrowserStack Devices, use the following command:
    ```sh
    percy app:exec -- wdio run resources/conf/wdio-bstack.conf.js
    ```
> Note: By default, this execution would run maximum 2 test threads in parallel on BrowserStack. The parallels can eb modified by updated the `maxInstances` inside `capabilities` object in `resources/conf/wdio-bstack.conf.js`.

## Additional Resources

- View your test results on the [BrowserStack App Automate Dashboard](https://www.browserstack.com/app-automate)
- Documentation for writing [App Automate test scripts in JS](https://www.browserstack.com/docs/app-automate/appium/getting-started/nodejs/webdriverio)
- Customizing your tests capabilities on BrowserStack using our [test capability generator](https://www.browserstack.com/app-automate/capabilities)
- [List of Browsers & mobile devices](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate) for automation testing on BrowserStack
- [Using Automate REST API](https://www.browserstack.com/automate/rest-api) to access information about your tests via the command-line interface
- Understand how many parallel sessions you need by using our [Parallel Test Calculator](https://www.browserstack.com/app-automate/parallel-calculator?ref=github)
- For testing public web applications behind IP restriction, [Inbound IP Whitelisting](https://www.browserstack.com/local-testing/inbound-ip-whitelisting) can be enabled with the [BrowserStack Enterprise](https://www.browserstack.com/enterprise) offering
