import 'dotenv/config'
import {localConf} from './local.conf.js'
import {sauceConf} from './sauce.conf.js'

function getConf(){
    switch(process.env.ENVIRONMENT){
        case 'local':
            return localConf
        case 'sauceLabs':
            return sauceConf
        default:
            return localConf
            
    }

}
export const config = getConf()
