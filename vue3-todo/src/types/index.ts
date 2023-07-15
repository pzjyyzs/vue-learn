interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

interface IState {
    list: ITodo[];
}

enum TODO_STATUS {
    DRAFT = 'draft',
    IN_PROGRESS = 'inProgress',
    Approved = 'approved'
}

export {
    ITodo,
    IState,
    TODO_STATUS
}