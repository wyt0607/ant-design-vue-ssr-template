<template>
    <div>
        <div class="test"></div>
        <div style="background: #2f54eb;height: 100px;width: 100px;"></div>
        <p>{{ $t('hello') }}</p>
        <a-card hoverable style="width: 240px">
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                 slot="cover"/>
            <a-card-meta title="Europe Street beat">
                <template slot="description">www.instagram.com</template>
            </a-card-meta>
        </a-card>

        <a-pagination showSizeChanger @showSizeChange="onShowSizeChange" :defaultCurrent="3" :total="500"/>
        <a-button @click="test"> 切换</a-button>
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