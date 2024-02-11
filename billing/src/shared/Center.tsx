import { PropType, defineComponent } from 'vue';

export const Center = defineComponent({
    props: {
        direction: {
            type: String as PropType<'horizontal' | 'vertical'>,
            default: 'horizontal'
        }
    },
    setup: (props, context) => {
        const extraClass = props.direction === 'horizontal' ? 'flex-row' : 'flex-col';
        return () => (
            <div class={['flex justify-center align-middle', extraClass]}>
                {
                    context.slots.default?.()
                }
            </div>
        );
    }
})