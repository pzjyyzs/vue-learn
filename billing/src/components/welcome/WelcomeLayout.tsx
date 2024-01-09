import { defineComponent, ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSwipe } from "../../hooks/useSwipe";

export const WelcomeLayout = defineComponent({
    setup: (props, context) => {
        const { slots } = context
        
        return () => (
            <div class='grow flex flex-col'>
                <div class='flex flex-col justify-center items-center grow mx-4 mt-4 p-4 shadow-2xl rounded-lg bg-[#fff]'>
                    { slots.icon?.() }
                    { slots.title?.() }
                </div>
            </div>
        )
    }
})