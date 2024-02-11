import { PropType, defineComponent } from 'vue';

export type IconName = 'add' | 'chart-bar' | 'clock' | 'cloud' | 'logo' | 'package' | 'menu' | 'money'
export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<IconName>
        }
    },
    setup: (props, context) => {
        return () => (
            <svg class='w-[1.2em] h-[1.2em]'>
                <use xlinkHref={'#' + props.name}></use>
            </svg>
        );
    }
})
