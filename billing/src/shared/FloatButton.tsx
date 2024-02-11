import { defineComponent } from 'vue';
import { Icon } from './Icon';

export const FloatButton = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class='w-[56px] h-[56px] bg-[linear-gradient(152deg,_#00bfd8_42%,_#0083f5)] rounded-[28px] flex justify-center items-center fixed bottom-[16px] right-[16px]'>
                <Icon name='add'></Icon>
            </div>
        );
    }
})