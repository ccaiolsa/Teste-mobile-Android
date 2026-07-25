import { $, browser } from '@wdio/globals'
import home from '../pageobjects/home.page.js'
import scroll from '../pageobjects/scroll.page.js'

describe('Funcionalidade carrosel', () => {
    beforeEach(async () => {
        await browser.activateApp('com.wdiodemoapp')
    });

    afterEach(async () => {
        await browser.terminateApp('com.wdiodemoapp')
    });


    it('Deve rolar o carrosel para a esquerda', async () => {
        let desc = 'GREAT COMMUNITY'

        await home.acessarScroll()
        await scroll.horizontal(desc)
        await expect($(`//android.widget.TextView[@text="${desc}"]`)).toBeDisplayed()

    });

});
