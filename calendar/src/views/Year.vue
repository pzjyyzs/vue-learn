<template>
    <div class="container">
        <error-tip></error-tip>
        <div v-if="!errorCode">
            <card-list :data="yearData"></card-list>
        </div>
    </div>
</template>

<script>
import getData from '@/services';
import { onMounted, computed, watch } from 'vue';
import { useStore } from 'vuex';
import ErrorTip from '@/components/errorTip.vue';
import CardList from '@/components/yearpage/list.vue';
import { getNowDate } from '@/libs/utils';

export default {
    name: 'YearPage',
    components: {
        ErrorTip,
        CardList
    },
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store, 'year', getNowDate('year'))
        })

        watch(() => {
            return state.yearData;
        }, () => {
            store.commit('setErrorCode', 0);
        })
        return {
            errorCode: computed(() => state.errorCode),
            yearData: computed(() => state.yearData)
        }
    }
}
</script>

<style lang="scss" scoped></style>

