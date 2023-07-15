<template>
    <div>
        <input type="checkbox" />
        <span> {{ item?.content }}</span>
    </div>
</template>
<script lang="ts">
import { ITodo } from '@/types';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TodoItem',
    props: {
        item: Object as PropType<ITodo>
    },
})
</script>
<style></style>