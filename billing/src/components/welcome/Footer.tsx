import { defineComponent, watch } from "vue"
import { RouterLink, useRoute, useRouter } from "vue-router"

export const Footer = defineComponent({
    setup: (props, context) => {
        const router = useRouter()
        const route = useRoute()
        const path = router.currentRoute.value.path;
        let nextPage = '/welcome/2', skipClass = 'text-3xl', skipName = '下一页';
        route
        watch(() => route.path, async newPath => {
            if (newPath === '/welcome/1') {
                nextPage = '/welcome/2'
            } else if (newPath === '/welcome/2') {
                nextPage = '/welcome/3'
            } else if (newPath === '/welcome/3') {
                nextPage = '/welcome/4'
            } else {
                nextPage = '/start'
                skipClass += ' invisible'
                skipName = '完成'
            }
        })
        return () => (
            <div class='grow flex flex-col'>
                <div class='fixed bottom-0 left-0 flex justify-between items-center py-6 px-4 w-full bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)]'>
                    <RouterLink class='text-3xl invisible' to='/start'>跳过</RouterLink>
                    <RouterLink class='text-3xl' to={nextPage}>{skipName}</RouterLink>
                    <RouterLink class={skipClass} to='/start'>跳过</RouterLink>
                </div>
            </div>
        )
    }
})