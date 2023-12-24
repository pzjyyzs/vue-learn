import { defineComponent } from 'vue';
import packageSvg from '../../assets/icon/package.svg';
import { RouterLink } from 'vue-router';
import { WelcomeLayout } from './WelcomeLayout';

export const First = defineComponent({
    setup: (props, context) => {
        const slots = {
            icon: () => <img src={packageSvg}></img>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
            buttons: () => <>
                <RouterLink class='text-3xl invisible' to='/start'>跳过</RouterLink>
                <RouterLink class='text-3xl' to='/welcome/2'>下一页</RouterLink>
                <RouterLink class='text-3xl' to='/start'>跳过</RouterLink>
            </>
        }
        return () => (
           <WelcomeLayout v-slots={slots}></WelcomeLayout>
        )
    }
})