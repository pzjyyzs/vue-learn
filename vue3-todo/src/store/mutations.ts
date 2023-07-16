import { ITodo, IState, TODO_STATUS } from "@/types";
import { REMOVE_TODO, SET_TODO, SET_TODO_DOING, SET_TODO_LIST, SET_TODO_STATUS } from "./actionType";

export default {
    [SET_TODO](state: IState, todo: ITodo): void {
        state.list = [todo, ...state.list];
    },
    [SET_TODO_LIST](state: IState, todoList: ITodo[]): void {
        state.list = todoList;
    },
    [REMOVE_TODO](state: IState, id: number): void {
        state.list = state.list.filter((item: ITodo) => item.id !== id);
    },
    [SET_TODO_STATUS](state: IState, id: number): void {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                if (item.status === TODO_STATUS.DRAFT) {
                    item.status = TODO_STATUS.IN_PROGRESS;
                } else if (item.status === TODO_STATUS.IN_PROGRESS) {
                    item.status = TODO_STATUS.Approved;
                }
            }
            return item
        })
    },
    [SET_TODO_DOING](state: IState, id: number): void {
        const item = state.list.find((item: ITodo) => item.id === id);
        if (item) {
            item.status = TODO_STATUS.IN_PROGRESS;
        }
    },
}