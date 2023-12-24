import { RouterLink } from 'vue-router';
import clock from '../../assets/icon/clock.svg';
import { WelcomeLayout } from './WelcomeLayout';

export const Second = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={clock}></img>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
            buttons: () => <>
                <RouterLink class='text-3xl invisible' to='/start'>跳过</RouterLink>
                <RouterLink class='text-3xl' to='/welcome/3'>下一页</RouterLink>
                <RouterLink class='text-3xl' to='/start'>跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

Second.displayName = 'Second';