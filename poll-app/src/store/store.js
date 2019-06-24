import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
    state: {
        answer: '',

    },
    mutations: {
        change(state, answer) {
            state.answer = answer
        }
    },
    getter: {
answer: state => state.answer
    }
})