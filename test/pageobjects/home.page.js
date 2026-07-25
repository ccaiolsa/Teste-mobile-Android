import {$} from '@wdio/globals'

class Home{
    get btnLogin(){
        return $('android=new UiSelector().description("Login")')

    };
    get btnMenu(){
        return $('android=new UiSelector().description("Menu")')
    };
    get btnScroll(){
        return $('//android.widget.Button[@content-desc="Swipe"]')
    }

    async acessarLogin(){
        await this.btnLogin.waitForExist()
        await this.btnLogin.click()
    }
    async acessarScroll(){
        await this.btnScroll.waitForExist()
        await this.btnScroll.click()
    }
}

export default new Home()