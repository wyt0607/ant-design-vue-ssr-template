import Vue from 'vue'
import App from './App.vue'
import Antd from 'vue-antd-ui'
import {sync} from 'vuex-router-sync'
import {createI18n} from "./i18n/i18n";
import {createStore} from './store/store'
import {createRouter} from './router/router'
import "./less/custom.less"

Vue.use(Antd)


export function createApp() {
    const i18n = createI18n()
    const router = createRouter()
    const store = createStore()

    // 同步路由状态(route state)到 store
    sync(store, router)

    const app = new Vue({
        i18n,
        router,
        store,
        render: h => h(App)
    })

    return {app, router, store}
}


