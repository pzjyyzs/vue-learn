import { defineComponent } from 'vue';
import packageSvg from '../../assets/icon/package.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <img src={packageSvg}></img>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>
        }
        return () => (
           <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})