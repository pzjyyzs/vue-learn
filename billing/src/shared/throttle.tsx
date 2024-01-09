export const throttle = (fn: Function, time: number) => {
    let timer: any = undefined
    return (...args: any) => {
        if (timer) {
            return 
        } else {
            fn(...args)
            timer = setTimeout(() => {
                timer = undefined
            }, time)
        }
    }
}