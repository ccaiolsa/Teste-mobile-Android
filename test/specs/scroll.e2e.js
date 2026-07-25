import { $, browser, expect } from '@wdio/globals'
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
        await home.acessarScroll()
        await scroll.texto("SUPPORT VIDEOS")

    });

});
