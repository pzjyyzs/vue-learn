<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <router-view />
  </div>
</template>

<script>
import MyHeader from '@/components/header';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    MyHeader
  },
  setup() {
    const store = useStore(),
      state = store.stat,
      router = useRouter();
    router.push('/');
    return computed(() => state).value
  }
}
</script>
<style lang="scss"></style>
