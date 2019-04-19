import colyseusx from 'colyseusx'

import counter from './modules/counter'

export default new colyseusx.Store({
    modules: {
        counter
    }
})