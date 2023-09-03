<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import Header from './views/header/header.vue';
import Main from './views/main/main.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  setup() {
    const router = useRouter();

    router.push('/');
  }
}


</script>
<style scoped></style>
./store/useTab.js