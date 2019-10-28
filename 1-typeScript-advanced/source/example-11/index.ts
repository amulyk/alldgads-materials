import { Action } from './todo.actions';
interface ITodoState {
    todos: string[];
}

function todoReducer(
    action: Action,
    state: ITodoState = { todos: [] }
): ITodoState {
    switch (action.type) {
        case "Add": {
            return {
                todos: [...state.todos, action.payload]
            };
        }
        case "Remove All": {
            return {
                todos: []
            };
        }
    }

    return state;
}