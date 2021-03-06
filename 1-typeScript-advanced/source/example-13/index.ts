import { Action, Add } from './todo.actions';
interface ITodoState {
    todos: string[];
}

function todoReducer(
    action: Action,
    state: ITodoState = { todos: [] }
): ITodoState {
    switch (action.type) {
        case "Add": {
            const payload = (<Add>action).payload;

            return {
                todos: [...state.todos, payload]
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