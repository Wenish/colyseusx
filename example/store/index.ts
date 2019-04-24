import colyseusx from '../../src'
import { Schema, type } from '@colyseus/schema';
import { IStateRoot } from './types';
import { IStoreOptions } from '../../src/types';
/*
import counter from './modules/counter'

export default new colyseusx.Store({
    modules: {
        counter
    }
})
*/

class StateVersion extends Schema implements IState {
    @type('string')
    version: string = '1.0.0'

    mutations: MutationTree<StateVersion> = {
        setVersion (state, payload: string) {
            state.version = payload
        }
    }

    commit (type: string) {

    }
}

interface IState extends Schema {
    
}

interface MutationTree<S> {
    [key: string]: Mutation<S>;
}

export type Mutation<S> = (state: S, payload?: any) => any;
