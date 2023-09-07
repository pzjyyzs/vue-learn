function timeFormart(time) {
    let date = new Date(time);
    let nowDate = new Date();
    let str = '';

    let isSameYear = date.getFullYear() == nowDate.getFullYear();
    let isSameMonth = date.getMonth() == nowDate.getMonth();
    let isSameDay = date.getDate() == nowDate.getDate();
    let isSameHour = date.getHours() == nowDate.getHours();
    let isSameMin = date.getMinutes() == nowDate.getMinutes();
    if (isSameYear) {
        if (isSameMonth) {
            if (isSameDay) {
                if (isSameHour) {
                    if (isSameMin) {

                    } else {
                        const diff = nowDate.getMinutes() - date.getMinutes();
                        str = `${diff}分钟前`
                    }
                } else {
                    const diff = nowDate.getHours() - date.getHours();
                    str = `${diff}小时前`
                }
            } else {
                const diff = nowDate.getDate() - date.getDate();
                str = `${diff}天前`
            }
        } else {
            const diff = nowDate.getMonth() - date.getMonth();
            str = `${diff + 1}月前`
        }
    } else {
        const diff = nowDate.getFullYear() - date.getFullYear();
        str = `${diff}年前`;
    }
    return str;
}

function makeIndexData(res) {
    let tab = {
        share: '分享',
        ask: '问答',
        job: '招聘',
        dev: '测试'
    }
    return res.data.map(item => {
        if (item.top) {
            item.tabTitle = '顶置';
        } else {
            item.tabTitle = tab[item.tab];
        }

        item.lastTimeTitle = timeFormart(item.last_reply_at);
        return item
    });
}

export {
    timeFormart,
    makeIndexData
}