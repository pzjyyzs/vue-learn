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
import { timeFormart } from '../../libs/utils'

export default {
    name: 'Left',
    components: {
        Header,
        Item
    },
    setup() {
        let data = ref([]);
        onMounted(() => {
            const { tab, currentIndex } = useTab();
            getTopics({ page: currentIndex, tab }).then(res => {
                console.log(res);
                if (res.success) {
                    let tab = {
                        share: '分享',
                        ask: '问答'
                    }
                    data.value = res.data.map(item => {
                        if (item.top) {
                            item.tabTitle = '顶置';
                        } else {
                            item.tabTitle = tab[item.tab];
                        }

                        item.lastTimeTitle = timeFormart(item.last_reply_at);
                        return item
                    });
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