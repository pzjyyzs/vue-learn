import axios from 'axios';
import qs from 'qs';

import { APP_KEY } from '../configs/key';

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'post',
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify({
            ...options.data,
            key: APP_KEY
        })
    }).then((res) => {
        options.success(res.data);
    }).catch((err) => {
        options.error(err);
    });
}

function axiosGet(options) {
    axios(options.url + '&key=' + APP_KEY)
        .then((res) => {
            options.success(res.data);
        }).catch((err) => {
            options.error(err);
        });
}

export {
    axiosPost,
    axiosGet
}