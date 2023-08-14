import { axiosGet } from "../libs/http";

function getTopics() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/v1/topics',
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