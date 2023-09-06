<template>
    <div class="header">
        <a class="tab current-tab">全部</a>
        <a href="javascript:void(0);" class="tab" @click="changeIndexTab('good')">精华</a>
        <a href="" class="tab">分享</a>
        <a href="" class="tab">问答</a>
        <a href="" class="tab">招聘</a>
        <a href="" class="tab">客户端测试</a>
    </div>
</template>
<script>
import useTab from '../../store/useTab';

export default {
    name: 'Header',
    setup() {

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