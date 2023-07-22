import { getIconDate } from '@/libs/utils.js';

export default [
    {
        iconText: getIconDate('day'),
        tabText: "当天",
        path: '/day'
    },
    {
        iconText: getIconDate('month'),
        tabText: "近期",
        path: '/month'
    },
    {
        iconText: getIconDate('year'),
        tabText: "当年",
        path: '/year'
    }
]