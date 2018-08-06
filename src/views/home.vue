<template>
    <div id="home">
        <a-layout>
            <a-layout-header>
                <a-row>
                    <a-col>
                        {{ $t('hello') }}
                        <a-calendar @panelChange="onPanelChange"/>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content style="padding: 0 300px;">

                <a-row style="margin-top: 30px">
                    <a-col :span="8" style="height: 500px;background:#ff8f27;"></a-col>
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
    en:{
    hello: "hello world!"
    },
    ja:{
    hello: "こんにちは、世界！"
    },
    zh_CN:{
    hello: "你好世界"
    }
    }
</i18n>
<script>
    import {Calendar} from "../../node_modules/ant-design-vue/es"

    export default {
        name: "home",
        components: {
            aCalendar: Calendar
        },
        methods: {
            onShowSizeChange() {

            },
            test() {
                this.$i18n.locale = "en"
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