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
    };
    get btnForm(){
        return $('//android.widget.Button[@content-desc="Forms"]')
    }

    async acessarLogin(){
        await this.btnLogin.waitForExist()
        await this.btnLogin.click()
    }
    async acessarScroll(){
        await this.btnScroll.waitForExist()
        await this.btnScroll.click()
    }
    async acessarForm(){
        await this.btnForm.waitForExist()
        await this.btnForm.click()
    }
}

export default new Home()