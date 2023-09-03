import { axiosGet } from "../libs/http";

function getTopics(params) {
    const arr = [];
    for (let key in params) {
        arr.push(`${key}=${params[key]}`)
    }
    console.log()
    return new Promise((resolve, reject) => {
        axiosGet({
            url: `/api/v1/topics?${arr.join('&')}`,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    });
}

export {
    getTopics
}