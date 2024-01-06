import { defineComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';

export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <svg><use xlinkHref='#package'></use></svg>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>
        }
        return () => (
           <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})