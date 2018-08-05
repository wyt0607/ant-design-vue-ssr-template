<template>
    <div id="app">
        <a-locale-provider :locale="locale">
            <router-view></router-view>
        </a-locale-provider>
    </div>
</template>

<script>
    import zhCN from '../node_modules/ant-design-vue/es/locale-provider/zh_CN';
    import {LocaleProvider} from "../node_modules/ant-design-vue/es"

    export default {
        name: "App",
        components: {aLocaleProvider: LocaleProvider},
        data() {
            return {
                locale: zhCN
            }
        },
        methods: {}
    }

</script>
