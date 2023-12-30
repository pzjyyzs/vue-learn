import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import cloud from '../../assets/icon/cloud.svg';
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={cloud}></img>,
                    title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
                }}
            </WelcomeLayout>
        )
    }
})