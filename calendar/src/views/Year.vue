<template>
    <div class="container">
        <error-tip></error-tip>
    </div>
</template>

<script>
import getData from '@/services';
import { onMounted } from 'vue';

export default {
    name: 'YearPage',
    components: {
        ErrorTip
    },
    setup() {
        onMounted(() => {
            getData('year', '2019')
        })
    }
}
</script>

<style lang="scss" scoped></style>

