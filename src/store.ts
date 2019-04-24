import { IStoreOptions, IStore } from "./types";

export class Store<S> implements IStore<S> {
    constructor (options: IStoreOptions<S>) {
        this.state = options.state
    }
    readonly state: S;

    dispatch (type: string, payload: any) {

    }

    commit (type: string, payload: any) {

    }
}

/*
export interface StoreOptions<S> {
  state?: S | (() => S);
  getters?: GetterTree<S, S>;
  actions?: ActionTree<S, S>;
  mutations?: MutationTree<S>;
  modules?: ModuleTree<S>;
  plugins?: Plugin<S>[];
  strict?: boolean;
}
*/