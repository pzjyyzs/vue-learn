import { REMOVE_TODO, SET_TODO, SET_TODO_DOING, SET_TODO_LIST, SET_TODO_STATUS } from "@/store/actionType";
import { ITodo, TODO_STATUS } from "@/types";
import { watch } from "vue";
import { Store, useStore } from "vuex";

export interface IUseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void,
    removeTodo: (id: number) => void,
    setStatus: (id: number) => void,
    setDoing: (id: number) => void
}

interface IUseLocalStorage {
    getLocalList: () => ITodo[];
    setLocaList: (list: ITodo[]) => void;
}
function useTodo(): IUseTodo {

    const store: Store<any> = useStore();
    const { setLocaList, getLocalList } = useLoacalStorage();
    const todoList: ITodo[] = getLocalList();

    watch(() => {
        return store.state.list;
    }, (todoList) => {
        setLocaList(todoList);
    })
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.DRAFT
        }

        store.dispatch(SET_TODO, todo);
        // setLocaList(store.state.list); // watch
    }

    function setTodoList() {
        store.dispatch(SET_TODO_LIST, todoList);
    }

    function removeTodo(id: number) {
        store.dispatch(REMOVE_TODO, id);
    }

    function setStatus(id: number) {
        store.dispatch(SET_TODO_STATUS, id);
    }

    function setDoing(id: number) {
        store.dispatch(SET_TODO_DOING, id);
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing
    }
}

function useLoacalStorage(): IUseLocalStorage {
    function getLocalList(): ITodo[] {
        return JSON.parse(localStorage.getItem('todoList') || '[]');
    }

    function setLocaList(list: ITodo[]): void {
        localStorage.setItem('todoList', JSON.stringify(list));
    }

    return {
        getLocalList,
        setLocaList
    }
}

export {
    useTodo
}