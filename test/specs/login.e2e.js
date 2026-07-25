import { $, browser} from '@wdio/globals'
import home from '../pageobjects/home.page.js'
import login from '../pageobjects/login.page.js'
import user from '../dados/user.json'

describe('Funcionalidade login', () => {
    beforeEach(async () => {
        await browser.activateApp('com.wdiodemoapp')
    });

    afterEach(async () => {
        await browser.terminateApp('com.wdiodemoapp')
    });


    it('Credenciar novo usuário com sucesso', async () => {
        await home.acessarLogin()
        await login.cadastrar(user.user.email, user.user.pass)
        await $('android=new UiSelector().resourceId("com.wdiodemoapp:id/scrollView")').waitForExist()
        await expect($('android=new UiSelector().resourceId("android:id/message")')).toHaveText('You successfully signed up!')
    });
    it('Realizar login com sucesso', async () => {
        await home.acessarLogin()
        await login.realizarLogin(user.user.email, user.user.pass)
        await $('android=new UiSelector().resourceId("com.wdiodemoapp:id/scrollView")').waitForExist()
        await expect($('android=new UiSelector().resourceId("android:id/message")')).toHaveText('You are logged in!')
    });

});
