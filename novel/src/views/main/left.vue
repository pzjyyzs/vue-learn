<template>
    <div class="panel">
        <Header></Header>
        <div class="inner">
            <div class="topic_list">
                <Item></Item>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './header.vue';
import Item from '@/components/item.vue';
export default {
    name: 'Left',
    components: {
        Header,
        Item
    }
}
</script>
<style lang='scss' scoped>
.panel {
    margin-bottom: 13px;
}
</style>