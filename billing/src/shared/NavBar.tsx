import { defineComponent } from 'vue';

export const Navbar = defineComponent({
    setup: (props, context) => {
        const { slots } = context;
        return () => (
            <div class='flex flex-row justify-start items-center bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)] text-[#fff] text-[24px] pt-6'>
                <span class='w-[32px] h-[32px] flex justify-center align-middle'>
                    { slots.icon?.() }
                </span>
                <span class='text-[24px] font-bold ml-3'>
                    { slots.default?.() }
                </span>
            </div>
        );
    }
})