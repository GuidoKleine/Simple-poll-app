import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        answers: [
            { answer: 'first question' },
            { answer: 'second question' }
        ],
    },
    mutations: {
        change(state, answer) {
            state.answer = answer
        }
    },
    getters: {
        answer: state => state.answer
    }
})