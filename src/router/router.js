import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {path: '/home', component: () => import("../views/home.vue").then(m => m.default)},
            {path: "*", redirect: '/home'}
        ]
    })
}