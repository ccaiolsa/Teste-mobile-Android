import 'dotenv/config'
import {generalConf} from './general.conf.js'

export const localConf = {
    ...generalConf,
    runner: 'local',
    port: 4723,
    services: ['appium'],
    capabilities: process.env.PLATFORM === 'Android'? [
        {
            "platformName": "Android",
            "appium:options": {
                "automationName": "UiAutomator2",
                "chromedriverAutodownload": true,
                "deviceName": "nightwatch-android-11",
                "platformVersion": "11.0",
                "app": "app/wdio/wdio.apk",
                "chromedriverExecutable": 'chromedriver-mobile/chromedriver.exe'
            }
        }
    ]:[]

}

