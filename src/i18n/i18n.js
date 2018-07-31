import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)


const globalMessages = {
    en: {},
    ja: {},
    zh_CN: {}
}

export function createI18n(locale) {
    return new VueI18n({
        locale: locale ? locale : "zh_CN",
        messages: globalMessages
    })
}