<template>
    <div class="error-tip" v-if="errorCode">
        <img :src="require('../../assets/image/error.png')" alt="" />
        <p>{{ errorData[errorCode] }}</p>
    </div>
</template>
<script>

import errorData from '@/data/error';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'ErrorTip',
    setup() {
        const store = useStore();
        return {
            errorCode: computed(() => store.state.errorCode),
            errorData
        }
    }
}
</script>
<style lang="scss" scoped>
.error-tip {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: .5rem;
    }

    p {
        margin-top: .15rem;
        font-size: .14rem;
        color: #999;
    }
}
</style>