export interface IStore<S> {
    readonly state: S,
    dispatch (type: string, payload?: any): void
    commit (type: string, payload?: any): void
}

export interface IStoreOptions<S> {
    state: S;
}