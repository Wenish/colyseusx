import { Room, Client } from "colyseus";
import store from './store'

export class MyRoom extends Room<any> {
    // When room is initialized
    onInit (options: any) { }

    // Checks if a new client is allowed to join. (default: `return true`)
    requestJoin (options: any, isNew: boolean) { }

    // Authorize client based on provided options before WebSocket handshake is complete
    onAuth (options: any) { }

    // When client successfully join the room
    onJoin (client: Client, options: any, auth: any) { }

    // When a client sends a message
    onMessage (client: Client, message: any) {
        var actionType = message.actionType = 'resetCounter' // example: 'SET_COUNTER'
        var payload = message.payload = 5 // example: 5
        store.dispatch(actionType, payload)
        store.dispatch('increment')
        store.dispatch('increment')
        store.dispatch('decrement')
    }

    // When a client leaves the room
    onLeave (client: Client, consented: boolean) { }

    // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
    onDispose () { }
}