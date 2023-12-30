import { Transition, VNode, defineComponent } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import logo from '../assets/icon/logo.svg';

export const Welcome = defineComponent({
    setup: (props, context) => {
        type Y = { Component: VNode, route: RouteLocationNormalizedLoaded }
        return () => <div class='flex h-[calc(100vh-83px)] flex-col mb-[83px] bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)]'>
            <header class='shrink-0 flex flex-col justify-center items-center pt-16 mx-4'>
                <img src={logo} alt="" />
                <h1 class='text-logocolor text-4xl mt-2'>记账</h1>
            </header>
            <main class='flex flex-col grow relative'>
                <RouterView name='main'>
                    {({ Component: Content, route: R }: Y) => <Transition
                                        enterActiveClass='absolute top-0 left-0 w-full h-full transition-all duration=[500ms] ease-out'
                                        leaveActiveClass='absolute top-0 left-0 w-full h-full transition-all duration=[500ms] ease-out'
                                        enterFromClass='translate-x-[100vw]'
                                        leaveToClass='translate-x-[-100vw]'
                                    >{Content}</Transition> }
                </RouterView>
            </main>
            <footer class='flex'>
                <RouterView name='footer' />
            </footer>
        </div>
    }
})