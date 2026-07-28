import 'dotenv/config'
import {localConf} from './local.conf.js'
import {sauceConf} from './sauce.conf.js'
console.log('ENVIRONMENT =', process.env.ENVIRONMENT)
    const cfg = getConf()

console.log(cfg)

export const config = cfg

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
