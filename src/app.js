import Vue from 'vue'
import App from './App.vue'
import {createStore} from './store/store'
import {createRouter} from './router/router'
import {sync} from 'vuex-router-sync'
import Antd from 'vue-antd-ui'
import "./less/custom.less"

Vue.use(Antd)

export function createApp() {
    const router = createRouter()
    const store = createStore()

    // 同步路由状态(route state)到 store
    sync(store, router)

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return {app, router, store}
}


