import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';

export const StartPage = defineComponent({
    setup: (props, context) => {
        const onClick = () => {
            console.log('Start');
        }
        return () => (
            <div class='py-4 px-4'>
                <Button class='w-full' onClick={onClick}>Start</Button>
                <FloatButton></FloatButton>
            </div>
        );
    }
})