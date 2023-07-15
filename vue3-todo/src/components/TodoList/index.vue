<template>
    <div>
        TodoList
        <todo-item v-for="item of todoList" :key="item.id" :item="item" @removeTodo="removeTodo" @setStatus="setStatus"
            @setDoing="setDoing"></todo-item>
    </div>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue';
import TodoItem from './Item.vue'
import { ITodo } from '@/types';
import { IUseTodo, useTodo } from '@/hooks';

export default defineComponent({
    name: 'TodoList',
    props: {
        todoList: Array as PropType<ITodo[]>
    },
    components: {
        TodoItem
    },
    setup(props, ctx) {
        const {
            removeTodo,
            setStatus,
            setDoing
        }: IUseTodo = useTodo();
        return {
            removeTodo,
            setStatus,
            setDoing
        }
    }
})
</script>
<style></style>