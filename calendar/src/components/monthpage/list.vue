<template>
    <div class="list-wrapper">
        <div class="holiday-list">
            <card-item v-for="(item, index) of data" :key="index" :item="item" />
        </div>
    </div>
</template>
<script>

import CardItem from './item.vue';

export default {
    name: 'CardList',
    components: {
        CardItem
    },
    props: {
        data: Array
    }
}
</script>
<style></style>