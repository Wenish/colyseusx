import { Client } from "colyseus";

const state = class State extends Schema {
    @type("number")
    counter: number = 0
}

const getters = {
    getCounter: (state, getters) => {
        return state.counter
    }
}

const mutations = {
    setCounter (state, payload: number) {
        state.counter = payload
    }
}

const actions = {
    SET_COUNTER (context, client: Client, payload: number) {
        //check if client is allowed todo this action
        //context.state
        //context.getters
        context.commit('setCounter', payload)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}