import { WelcomeLayout } from './WelcomeLayout';

export const Second = () => (
    <WelcomeLayout>
        {{
            icon: () => <svg><use xlinkHref='#clock'></use></svg>,
            title: () => <><div class='text-2xl mt-2'>会挣钱</div><div class='text-2xl mt-2'>还要会省钱</div></>,
        }}
    </WelcomeLayout>
)

Second.displayName = 'Second';