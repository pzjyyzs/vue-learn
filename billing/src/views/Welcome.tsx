import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import logo from '../assets/icon/logo.svg';

export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class='flex h-lvh flex-col'>
            <header class='shrink-0 flex flex-col justify-center items-center'>
                <img src={logo} alt="" />
                <h1>记账</h1>
            </header>
            <main class='grow'>
                main
                <RouterView />
            </main>
        </div>
    }
})