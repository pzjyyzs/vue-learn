<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input :placeholder="placeholder" :maxlength="maxlenght" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/header';
import Tab from '@/components/tab';
import SearchInput from '@/components/searchInput';
import { useStore } from 'vuex';
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    SearchInput
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    router.push('/');
    store.commit('setPlaceholder', 'day');

    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setHeaderTitle', value);
      store.commit('setPlaceholder', value);
      store.commit('setMaxLength', value);
    })
    return computed(() => state).value
  }
}
</script>
<style lang="scss"></style>
