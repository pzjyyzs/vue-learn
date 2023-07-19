import { axiosPost } from "@/libs/http";

function getDayData(date) {
    return new Promise((reslove, reject) => {
        axiosPost({
            url: '/api/calendar/day',
            data: { date },
            success(data) {
                reslove(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function getMonthData(yearMonth) {
    return new Promise((reslove, reject) => {
        axiosPost({
            url: '/api/calendar/month',
            data: {
                'year-month': yearMonth
            },
            success(data) {
                reslove(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function getYearData(year) {
    return new Promise((reslove, reject) => {
        axiosPost({
            url: '/api/calendar/year',
            data: { year },
            success(data) {
                reslove(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

export {
    getDayData,
    getMonthData,
    getYearData
}