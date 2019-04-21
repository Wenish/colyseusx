import { Client } from "colyseus";
import { Schema, type } from "@colyseus/schema";

class State extends Schema {
    @type("number")
    counter: number = 0
}

const mutations = {
    setCounter (state: State, payload: number) {
        state.counter = payload
    },
    increment (state: State) {
        state.counter++
    },
    decrement (state: State) {
        state.counter--
    }
}

const getters = {
    evenOrOdd: (state: State) => state.counter % 2 === 0 ? 'even' : 'odd'
}

const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
        commit('increment')
        }
    },
    resetCounter (context, payload: number) {
        context.commit('setCounter', payload)
    },
    resetCounterAsync (context, payload: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('setCounter', payload)
                resolve()
            }, 1000)
        })
    }
}

export default {
    State,
    getters,
    actions,
    mutations
}