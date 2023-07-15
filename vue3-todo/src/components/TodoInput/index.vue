<template>
    <div>
        <input type="text" v-model="todoValue" @keyup.enter="setTodoValue" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'TodoInput',
    setup() {
        const todoValue = ref<string>('');

        const setTodoValue = (): void => {
            console.log('123', todoValue.value)
            if (todoValue.value.trim().length) {
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