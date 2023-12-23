import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import logo from '../assets/icon/logo.svg';

export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class='flex h-lvh flex-col bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)]'>
            <header class='shrink-0 flex flex-col justify-center items-center pt-16 mx-4'>
                <img src={logo} alt="" />
                <h1 class='text-logocolor text-4xl mt-2'>记账</h1>
            </header>
            <main class='flex flex-col grow'>
                <RouterView />
            </main>
        </div>
    }
})