<template>
    <div class="panel">
        <Header></Header>
        <div class="inner">
            <div class="topic_list">
                <Item :data="data"></Item>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import Header from './header.vue';
import Item from '@/components/item.vue';
import { getTopics } from '../../services/request';
import useTab from '../../store/useTab';
import { makeIndexData } from '../../libs/utils';
import { storeToRefs } from 'pinia';

export default {
    name: 'Left',
    components: {
        Header,
        Item
    },
    setup() {
        let data = ref([]);
        const tabStore = useTab();
        const { tab, currentIndex } = storeToRefs(tabStore);
        onMounted(() => {
            getTopics({ page: currentIndex.value, tab: tab.value })
                .then(res => {
                    if (res.success) {
                        data.value = makeIndexData(res);
                    }
                });
        });
        tabStore.$subscribe((mutation, state) => {
            getTopics({ page: state.currentIndex, tab: state.tab }).then(res => {
                if (res.success) {
                    data.value = makeIndexData(res);
                }
            })
        })
        return {
            data
        }
    }
}
</script>
<style lang='scss' scoped>
.panel {
    margin-bottom: 13px;
}
</style>