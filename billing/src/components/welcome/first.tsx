import { defineComponent } from 'vue';
import packageSvg from '../../assets/icon/package.svg';
import { RouterLink } from 'vue-router';

export const First = defineComponent({
    setup: (props, context) => {
        return () => (
            <div class='grow flex flex-col'>
                <div class='flex flex-col justify-center items-center grow mx-4 mt-4 p-4 shadow-2xl rounded-lg bg-[#fff]'>
                    <img src={packageSvg}></img>
                    <div class='text-2xl mt-2'>会挣钱</div>
                    <div class='text-2xl mt-2'>还要会省钱</div>
                </div>
                <div class='flex justify-between items-center mx-4 my-6'>
                    <RouterLink class='text-3xl invisible' to='/start'>跳过</RouterLink>
                    <RouterLink class='text-3xl' to='/welcome/2'>下一页</RouterLink>
                    <RouterLink class='text-3xl' to='/start'>跳过</RouterLink>
                </div>
            </div>
        )
    }
})