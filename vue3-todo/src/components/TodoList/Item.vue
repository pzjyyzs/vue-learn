<template>
    <div v-if="item">
        <!-- <input type="checkbox" :checkbox="item.status === satus.Approved" /> -->
        <span> {{ item.content }}</span>
        <button @click="removeTodo(item.id)">删除</button>
        <button @click="setStatus(item.id)" :class="item.status === satus.IN_PROGRESS ? 'doing' : 'approve'">{{
            statusText[item.status] }}</button>
    </div>
</template>
<script lang="ts">
import { ITodo, TODO_STATUS } from '@/types';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
    name: 'TodoItem',
    props: {
        item: Object as PropType<ITodo>
    },
    setup(props, { emit }) {
        const satus = {
            DRAFT: TODO_STATUS.DRAFT,
            IN_PROGRESS: TODO_STATUS.IN_PROGRESS,
            Approved: TODO_STATUS.Approved
        }

        const statusText = {
            [satus.DRAFT]: '马上做',
            [satus.IN_PROGRESS]: '正在做',
            [satus.Approved]: '已完成'
        }
        const removeTodo = (id: number) => {
            emit('removeTodo', id);
        }
        const setStatus = (id: number) => {
            emit('setStatus', id);
        }

        const setDoing = (id: number) => {
            emit('setDoing', id);
        }
        return {
            satus,
            removeTodo,
            setStatus,
            setDoing,
            statusText
        }
    }
})
</script>
<style>
.doing {
    background-color: #cdcdcd;
    color: red;
}

.approve {
    background-color: orange;
    color: white;
}
</style>