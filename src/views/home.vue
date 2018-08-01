<template>
    <div id="home">
        <a-layout>
            <a-layout-header style="background:#b6b4ba;opacity: .3">
                <a-row>
                    <a-col style="height: 500px;background:#55b3ff;"></a-col>
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
<i18n>
    {
    "en": {
    "hello": "hello world!"
    },
    "ja": {
    "hello": "こんにちは、世界!"
    },
    "zh_CN": {
    "hello": "你好世界!"
    }
    }
</i18n>
<script>
    export default {
        name: "home",
        methods: {
            onShowSizeChange() {

            },
            test() {
                this.$i18n.locale = "en"
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

    .test {
        height: 100px;
        width: 100px;
        background: red
    }

</style>