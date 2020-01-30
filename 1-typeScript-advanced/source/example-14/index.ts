import { TodoActions } from './todo.actions';
interface ITodoState {
    todos: string[];
}

function todoReducer(
    action: TodoActions,
    state: ITodoState = { todos: [] }
): ITodoState {
    switch (action.type) {
        case "Add": {
            return {
                todos: [...state.todos, action.payload]
            };
        }
        case "Remove All": {
            const removeAllAction = action;

            return {
                todos: []
            };
        }
    }

    return state;
}
