import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

/**
 *  初始化根节点国际化信息 , 在子组件中可以把key对应的值给覆盖
 * */
const initMessages = {
    en: {
        "msg": "init"
    },
    ja: {},
    zh_CN: {
        "msg": "初始化"
    }
}

export function createI18n(locale) {
    return new VueI18n({
        locale: locale ? locale : "zh_CN",
        messages: initMessages
    })
}