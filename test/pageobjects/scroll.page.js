import { $, browser } from '@wdio/globals'

class Scroll{
    async texto(nome){
        return $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${nome}")`)
    }
}

export default new Scroll()