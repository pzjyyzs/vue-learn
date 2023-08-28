<template>
    <div class="main">
        <div class="content">
            <Left></Left>
        </div>
    </div>
</template>
<script>
import Left from './left.vue';
export default {
    name: 'main',
    components: {
        Left
    }
}
</script>
<style lang='scss' scoped>
.main {
    position: relative;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
}
</style>