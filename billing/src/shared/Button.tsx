import { defineComponent } from 'vue';

interface Props {
    onClick?: (e: MouseEvent) => void;
}

export const Button = defineComponent<Props>({
    //inheritAttrs: false,
    //props: ['class', 'onClick'],
    setup: (props, context) => {
        return () => (
            <button class='border-0 py-2 px-4 bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)] text-[#fff] text-[18px]'>
                { context.slots.default?.() }
            </button>
        );
    }
})