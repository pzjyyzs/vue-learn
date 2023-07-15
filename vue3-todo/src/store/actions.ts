import { Commit } from "vuex";
import { REMOVE_TODO, SET_TODO, SET_TODO_DOING, SET_TODO_LIST, SET_TODO_STATUS } from "./actionType";
import { ITodo } from "@/types";
import { ActionContext } from "vuex";

interface IState {
    commit: Commit;
}
export default {
    [SET_TODO]({ commit }: IState, todo: ITodo): void {
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({ commit }: IState, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList);
    },
    [REMOVE_TODO]({ commit }: IState, id: number): void {
        commit(REMOVE_TODO, id);
    },
    [SET_TODO_STATUS]({ commit }: IState, id: number): void {
        commit(SET_TODO_STATUS, id);
    },
    [SET_TODO_DOING]({ commit }: IState, id: number): void {
        commit(SET_TODO_DOING, id);
    }
}