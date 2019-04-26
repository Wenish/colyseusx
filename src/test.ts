import { Schema, type } from '@colyseus/schema';

//-------- Module
interface MutationTree<S> {
    [key: string]: Mutation<S>;
}

export type Mutation<S> = (state: S, payload?: any) => any;


interface IStore<S> {
    state: S
    commit(type: string)
    dispatch(type: string)
}

class Store<S> implements IStore<S> {

    constructor (stateRoot: S & IStateModule<S>) {
        this.state = stateRoot
        console.log(stateRoot)
    }
    state: S & IStateModule<S>
    /*
    mutations: MutationTree<StateVersion> = {
        setVersion (state, payload: string) {
            state.version = payload
        }
    }
    */

    commit (type: string) {}
    dispatch (type: string) {}
}


interface IStateModule<S> extends Schema {
    mutations?: MutationTree<S>
}

//-------- Implementation


class StateCounter extends Schema {
    @type('number')
    counter: number = 0
}


class StateRoot extends Schema implements IStateRoot, IStateModule<IStateRoot> {
    @type('string')
    version: string = '1.0.0'
}

interface IStateRoot extends Schema {
    version: string
}


var store = new Store<StateRoot>(new StateRoot())

console.log(store)
console.log(store.state)