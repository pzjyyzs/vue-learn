<template>
    <div>
        <input type="text" v-model="todoValue" @keyup.enter="setTodoValue" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IUseTodo, useTodo } from '../../hooks/index';

export default defineComponent({
    name: 'TodoInput',
    setup() {
        const todoValue = ref<string>('');

        const { setTodo }: IUseTodo = useTodo();
        const setTodoValue = (): void => {
            if (todoValue.value.trim().length) {
                setTodo(todoValue.value);
                todoValue.value = '';
            }

        }

        return {
            todoValue,
            setTodoValue
        }
    }
})
</script>
<style></style>