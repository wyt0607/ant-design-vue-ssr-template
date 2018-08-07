<template>
    <div id="home">
        <a-layout>
            <a-layout-header>
                <a-row>
                    <a-col>

                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="padding: 0 300px;">

                <a-row style="margin-top: 30px">
                    <a-col :span="8" style="height: 500px;background:#ff8f27;">
                        <a-button @click="test('zh_CN')">中文</a-button>
                        <a-button @click="test('en')">英文</a-button>
                        <a-button @click="test('ja')">日语</a-button>
                        {{ $t('hello') }} {{ $t('msg') }}
                    </a-col>
                    <a-col :span="16" style="height: 500px;background:#55b3ff;"></a-col>
                </a-row>
                <a-row style="margin-top: 30px">
                    <a-col :span="16" style="height: 500px;background:#55b3ff;"></a-col>
                    <a-col :span="8" style="height: 500px;background:#ff8f27;"></a-col>
                </a-row>
                <a-row style="margin-top: 30px">
                    <a-col :span="8" style="height: 500px;background:#ff8f27;"></a-col>
                    <a-col :span="16" style="height: 500px;background:#55b3ff;"></a-col>
                </a-row>
            </a-layout-content>
            <a-layout-footer style="background:#b6b4ba;height: 200px;margin:50px  300px ">

            </a-layout-footer>
        </a-layout>
    </div>
</template>
<!--
<i18n>
    en:
        hello: "hello world!"
    ja:
        hello: "こんにちは、世界！"
    zh_CN:
        hello: "你好世界"
</i18n>
-->
<i18n>
    {
    "en":{
    "hello": "hello world!"
    },
    "ja":{
    "hello": "こんにちは、世界！"
    },
    "zh_CN":{
    "hello": "你好世界",
    "msg": "覆盖一下!!!"
    }
    }
</i18n>
<script>
    import {Calendar, Button} from "../../node_modules/ant-design-vue/es"

    export default {
        name: "home",
        components: {
            AButton: Button,
            ACalendar: Calendar
        },
        methods: {
            onShowSizeChange() {

            },
            test(locale) {
                /* 切换根节点的i18n*/
                this.$root.$i18n.locale = locale
                /*切换此节点的i18n*/
                this.$i18n.locale = locale
            },
            onPanelChange(e) {
                console.log(e);
            }
        },
        mounted() {
            /*  console.log(this.$store);
              console.log(this.$router);
              this.$axios.get(process.env.SERVER_URL + '/menus/all').then(response => {
                  console.log(response);
              })*/
        },
        asyncData({store}) {
            store.dispatch("FETCH_DATA")
        }

    }
</script>

<style lang="less" scoped>
    @test: 10px;

    .test {
        height: @test;
        width: 100px;
        background: red
    }

</style>