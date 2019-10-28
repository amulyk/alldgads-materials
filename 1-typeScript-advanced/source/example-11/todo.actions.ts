export interface Action {
    type: string;
}

export class Add implements Action {
    readonly type: string = 'Add';
    constructor(public payload: string) {

    }
}

export class RemoveAll implements Action {
    readonly type: string = 'Remove All';
}
