import {confHooks} from './hook.conf.js'
import {confSpecs} from './spec.conf.js'
import {confSuites} from './suites.conf.js'
import {confReport} from './report.conf.js'

export const generalConf ={
    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 70000
    },
    ...confHooks,
    ...confSpecs,
    ...confSuites,
    ...confReport

}