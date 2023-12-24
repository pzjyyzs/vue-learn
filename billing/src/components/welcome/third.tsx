import { defineComponent } from 'vue';
import chart from '../../assets/icon/chart-bar.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const Third = defineComponent({
    setup: (props, context) => {
        return () => (
            <WelcomeLayout>
                {{
                    icon: () => <img src={chart}></img>,
                    title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
                    buttons: () => <>
                        <RouterLink class='text-3xl invisible' to='/start'>跳过</RouterLink>
                        <RouterLink class='text-3xl' to='/welcome/4'>下一页</RouterLink>
                        <RouterLink class='text-3xl' to='/start'>跳过</RouterLink>
                    </>
                }}
            </WelcomeLayout>
        )
    }
})