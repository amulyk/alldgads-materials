export interface Action {
    type: string;
}

export class Add implements Action {
    readonly type = 'Add';
    constructor(public payload: string) {}
}

export class RemoveAll implements Action {
    readonly type = 'Remove All';
}

export type TodoActions = Add | RemoveAll;