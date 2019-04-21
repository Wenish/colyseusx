import colyseusx from '../../src'

import counter from './modules/counter'

export default new colyseusx.Store({
    modules: {
        counter
    }
})