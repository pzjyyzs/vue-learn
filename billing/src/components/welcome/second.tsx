import { RouterLink } from 'vue-router';
import clock from '../../assets/icon/clock.svg';
import { WelcomeLayout } from './WelcomeLayout';

export const Second = () => (
    <WelcomeLayout>
        {{
            icon: () => <img src={clock}></img>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
        }}
    </WelcomeLayout>
)

Second.displayName = 'Second';