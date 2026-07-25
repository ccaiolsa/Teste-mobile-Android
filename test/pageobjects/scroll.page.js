import { $, browser } from '@wdio/globals'



class Scroll {

    async horizontal(nome) {
        await $(`//android.widget.TextView[@text="${nome}"]`).scrollIntoView({
            direction: 'left',
            duration: 1000,
            percent: 0.5
        })
    }
    
}

export default new Scroll()