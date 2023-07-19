<template>
    <div class="container">
        Month page
    </div>
</template>

<script>
import getData from '@/services';
import { onMounted } from 'vue';

export default {
    name: 'MonthPage',
    setup() {
        onMounted(() => {
            getData('month', '2020-7')
        })
    }
}
</script>

<style lang="scss" scoped></style>

