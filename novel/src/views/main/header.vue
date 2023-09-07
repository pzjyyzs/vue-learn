<template>
    <div class="header">
        <a class="tab" :class="{ 'current-tab': currentTab == '' }" @click="changeIndexTab('')">全部</a>
        <a href="javascript:void(0);" class="tab" :class="{ 'current-tab': currentTab == 'good' }"
            @click="changeIndexTab('good')">精华</a>
        <a href="javascript:void(0);" class="tab" :class="{ 'current-tab': currentTab == 'share' }"
            @click="changeIndexTab('share')">分享</a>
        <a href="javascript:void(0);" class="tab" :class="{ 'current-tab': currentTab == 'ask' }"
            @click="changeIndexTab('ask')">问答</a>
        <a href="javascript:void(0);" class="tab" :class="{ 'current-tab': currentTab == 'job' }"
            @click="changeIndexTab('job')">招聘</a>
        <a href="javascript:void(0);" class="tab" :class="{ 'current-tab': currentTab == 'dev' }"
            @click="changeIndexTab('dev')">客户端测试</a>
    </div>
</template>
<script>
import { ref } from 'vue';
import useTab from '../../store/useTab';
import { storeToRefs } from 'pinia';

export default {
    name: 'Header',
    setup() {
        const tabStore = useTab();
        const { tab } = storeToRefs(tabStore);
        let tabValue = ref(tab.value);
        tabStore.$subscribe((mutation, state) => {
            tabValue.value = state.tab;
        })
        return {
            currentTab: tabValue
        }
    },
    methods: {
        changeIndexTab(str) {
            const tab = useTab();
            tab.changeTab(str);
        }
    }
}
</script>
<style lang="scss" scoped>
.header {
    padding: 10px;
    background-color: #f6f6f6;

    .tab {
        margin: 0 10px;
        color: #80bd01;

        &.current-tab {
            background-color: #80bd01;
            color: #fff;
            padding: 3px 4px;
            border-radius: 3px;
        }
    }
}
</style>