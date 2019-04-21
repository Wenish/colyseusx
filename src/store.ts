export class Store<S> {
    constructor (options: StoreOptions<S> = {}) {

    }
    readonly state: S;
    readonly getters: any;

    replaceState(state: S): void {
        state = state
    };

    dispatch (type: string, payload: any) {

    }

    commit (type: string, payload: any) {

    }
}

interface StoreOptions<S> {

}