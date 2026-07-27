import 'dotenv/config'
import { generalConf } from './general.conf.js'

export const sauceConf = {
    ...generalConf,
    user: process.env.SAUCE_USER,
    key: process.env.SAUCE_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    services: [],
    path: '/wd/hub',

    capabilities: [
        {
            'platformName': 'Android',
            'appium:app': 'storage:filename=wdio.apk', // The filename of the mobile app
            'appium:deviceName': 'Google Pixel 6a Emulator',
            'appium:platformVersion': '13.0',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                appiumVersion: '2.11.0',
                build: 'appium-build-test',
                name: 'wdio teste',
                deviceOrientation: 'PORTRAIT',
            }
        }
    ]
}