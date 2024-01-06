import { defineComponent } from 'vue';
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <svg><use xlinkHref='#cloud'></use></svg>,
                    title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
                }}
            </WelcomeLayout>
        )
    }
})