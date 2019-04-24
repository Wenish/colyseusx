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
class StateRoot extends Schema implements IStateRoot {
    @type('string')
    version: string = '1.0.0'
}

const options: IStoreOptions<IStateRoot> = {
    state: new StateRoot()
}

export default new colyseusx.Store<IStateRoot>(options)