export default {
    setHeaderTitle(state, routerName) {
        switch (routerName) {
            case 'day':
                state.headerTitle = '当天信息';
                break;
            case 'month':
                state.headerTitle = '近期假期';
                break;
            case 'year':
                state.headerTitle = '当年假期';
                break;
            default:
                state.headerTitle = '当天信息';
                break;
        }
    }
}