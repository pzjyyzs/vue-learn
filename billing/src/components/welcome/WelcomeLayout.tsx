import { defineComponent } from "vue";

export const WelcomeLayout = defineComponent({
    setup: (props, context) => {
        const { slots } = context
        return () => (
            <div class='grow flex flex-col'>
                <div class='flex flex-col justify-center items-center grow mx-4 mt-4 p-4 shadow-2xl rounded-lg bg-[#fff]'>
                    { slots.icon?.() }
                    { slots.title?.() }
                </div>
                <div class='fixed bottom-0 left-0 flex justify-between items-center py-6 px-4 w-full bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)]'>
                    { slots.buttons?.() }
                </div>
            </div>
        )
    }
})