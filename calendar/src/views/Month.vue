<template>
    <div class="container">
        <error-tip></error-tip>
        <div v-if="!errorCode">
            <card-list :data="monthData" />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import getData from '@/services';
import { computed, onMounted, watch } from 'vue';
import { getNowDate } from '@/libs/utils';
import CardList from '@/components/monthpage/list.vue';
import ErrorTip from '@/components/errorTip.vue';

export default {
    name: 'MonthPage',
    components: {
        CardList,
        ErrorTip
    },
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store, 'month', getNowDate('month'));
        })

        watch(() => {
            return state.month
        }, () => {
            store.commit('setErrorcode', 0);
        });

        return {
            monthData: computed(() => state.monthData),
            errorCode: computed(() => state.errorCode)
        }
    }
}
</script>

<style lang="scss" scoped></style>

