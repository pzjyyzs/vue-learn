<template>
    <div class="container">
        <day-card :data="dayData"></day-card>
        <day-list :data="dayData"></day-list>
    </div>
</template>

<script>
import getData from '@/services';
import { computed, onMounted } from 'vue';
import DayCard from '@/components/daypage/daycard.vue';
import DayList from '@/components/daypage/list/index.vue';
import { useStore } from 'vuex';
import { getNowDate } from '@/libs/utils';

export default {
    name: 'DayPage',
    components: {
        DayCard,
        DayList
    },
    setup() {
        const store = useStore(),
            state = store.state;
        onMounted(() => {
            getData(store, 'day', getNowDate('day'));
        })

        return {
            dayData: computed(() => state.dayData)
        }
    }
}
</script>

<style lang="scss" scoped></style>

