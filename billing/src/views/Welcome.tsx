import { Transition, VNode, defineComponent, ref, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from 'vue-router';
import { useSwipe } from '../hooks/useSwipe';
import { throttle } from '../shared/throttle';

export const Welcome = defineComponent({
    setup: (props, context) => {
        const router = useRouter()
        const route = useRoute()
        const main = ref<HTMLDivElement>()
        const { swiping, direction } = useSwipe(main, {
            beforeStart: e => e.preventDefault()
        })
        const pushMap: Record<string, string> = {
            'welcome1': '/welcome/2',
            'welcome2': '/welcome/3',
            'welcome3': '/welcome/4',
            'welcome4': '/start'
        }
        const push = throttle(() => {
            const name = (route.name || 'welcome1').toString();
            router.push(pushMap[name])
        }, 500)
        watchEffect(() => {
            console.log('123 a', route.name)
            if (swiping.value && direction.value === 'left') {
                push()
            }
        })
        type Y = { Component: VNode, route: RouteLocationNormalizedLoaded }
        return () => <div class='flex h-[calc(100vh-83px)] flex-col mb-[83px] bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)]'>
            <header class='shrink-0 flex flex-col justify-center items-center pt-16 mx-4'>
                <svg class='w-[64px] h-[69px]'>
                    <use xlinkHref='#logo'></use>
                </svg>
                <h1 class='text-logocolor text-4xl mt-2'>记账</h1>
            </header>
            <main class='flex flex-col grow relative' ref={main}>
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