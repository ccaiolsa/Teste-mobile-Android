import {$} from '@wdio/globals'

class Login{
    get loginEmail(){
        return $('android=new UiSelector().text("Email")')

    };
    get loginPass(){
        return $('android=new UiSelector().text("Password")')
    };
    get btnLogin(){
        return $('android=new UiSelector().description("button-LOGIN")')

    };
    get signUp(){
        return $('//android.widget.TextView[@text="Sign up"]')

    };
    get userEmail(){
        return $('android=new UiSelector().text("Email")')

    };
    get userPass(){
        return $('android=new UiSelector().text("Password")')
    };
    get confPass(){
        return $('android=new UiSelector().text("Confirm password")')

    };
    get btnSubmit(){
        return $('android=new UiSelector().description("button-SIGN UP")')
    }

    async cadastrar(email, pass){
        await this.signUp.waitForExist()
        await this.signUp.click()

        await this.userEmail.waitForExist()
        await this.userEmail.setValue(email)

        await this.userPass.waitForExist()
        await this.userPass.setValue(pass)

        await this.confPass.waitForExist()
        await this.confPass.setValue(pass)

        await this.btnSubmit.waitForExist()
        await this.btnSubmit.click()
    }
    async realizarLogin(email, pass){
        await this.loginEmail.waitForExist()
        await this.loginEmail.setValue(email)

        await this.loginPass.waitForExist()
        await this.loginPass.setValue(pass)

        await this.btnLogin.waitForExist()
        await this.btnLogin.click()

    }
}

export default new Login()