import { $, browser } from '@wdio/globals'
import home from '../pageobjects/home.page'
import form from '../pageobjects/form.page.js'

describe('Funcionalidade preencher formulário', () => {
    beforeEach(async () => {
        await browser.activateApp('com.wdiodemoapp')
    });

    afterEach(async () => {
        await browser.terminateApp('com.wdiodemoapp')
    });


    it('Deve preencher formulário', async () => {
        let texto = 'Testando formulário'
        await home.acessarForm()
        await form.preencherFormulario(texto)
        await expect($('android=new UiSelector().text("Form components")')).toBeDisplayed()

    })
})