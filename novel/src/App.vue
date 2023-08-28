<template>
  <Header></Header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import { onMounted } from 'vue';
import { getTopics } from './services/request';
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
    onMounted(() => {
      getTopics().then(res => {
        console.log(res);
      })
    })
  }
}


</script>
<style scoped></style>
