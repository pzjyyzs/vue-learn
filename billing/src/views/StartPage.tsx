import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import { Navbar } from '../shared/NavBar';
import { Icon } from '../shared/Icon';
import { Center } from '../shared/Center';

export const StartPage = defineComponent({
    setup: (props, context) => {
        const onClick = () => {
            console.log('Start');
        }
        return () => (
            <div>
                <Navbar>
                    { 
                        { default: '记账', icon: <Icon name='menu'></Icon> } 
                    }
                </Navbar>
                <Center class='pt-[160px] pb-[160px]'>
                    <Icon name='money' class='w-[128px] h-[128px]'></Icon>
                </Center>
                <div class='py-4 px-4'>

                    <Button class='w-full' onClick={onClick}>Start</Button>
                    <FloatButton></FloatButton>
                </div>
            </div>
        );
    }
})