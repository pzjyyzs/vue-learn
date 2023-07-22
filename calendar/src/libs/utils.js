function _addZero(value) {
    return value < 10 ? ('0' + value) : value
}

function getIconDate(type) {
    const date = new Date();

    switch (type) {
        case 'day':
            return _addZero(date.getDate().toString());
        case 'month':
            return _addZero((date.getMonth() + 1).toString());
        case 'year':
            return date.getFullYear().toString().substring(2);
    }
}

export {
    getIconDate
}