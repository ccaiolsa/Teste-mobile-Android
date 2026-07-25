import { $, $$} from '@wdio/globals'

class Form{
    get typeField(){
        return $('//android.widget.EditText[@content-desc="text-input"]')
    };
    get switch(){
        return $('//android.widget.Switch[@content-desc="switch"]')
    };
    get btnDropdown(){
        return $('//android.widget.TextView[@resource-id="dropdown-chevron"]')
    };
    get dropdownMenu(){
        return $$('//android.widget.CheckedTextView')
    }
    get btnAct(){
        return $('//android.view.ViewGroup[@content-desc="button-Active"]')
    }

    async preencherFormulario(type){

        await this.typeField.waitForExist()
        await this.typeField.setValue(type)
        await expect($('//android.widget.TextView[@content-desc="input-text-result"]')).toHaveText(type)

        await this.switch.waitForExist()
        await this.switch.click()
        await expect($('//android.widget.TextView[@content-desc="switch-text"]')).not.toHaveText('Click to turn the switch ON')

        await this.btnDropdown.waitForExist()
        await this.btnDropdown.click()
        await this.dropdownMenu[1].click()
        await expect($('//android.widget.EditText[@resource-id="text_input"]')).toHaveText('webdriver.io is awesome')

        await this.btnAct.waitForExist()
        await this.btnAct.click()
        await expect($('//android.widget.TextView[@resource-id="android:id/message"]')).toBeDisplayed()
        await $('android=new UiSelector().resourceId("android:id/button1")').click()
    }

}

export default new Form()