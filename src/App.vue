<template>
    <div id="app">
        <a-locale-provider :locale="locale">
            <router-view></router-view>
        </a-locale-provider>
    </div>
</template>

<script>
    import zhCN from 'vue-antd-ui/lib/locale-provider/zh_CN';

    export default {
        name: "App",
        data() {
            return {
                locale: zhCN
            }
        },
        methods: {}
    }

</script>
