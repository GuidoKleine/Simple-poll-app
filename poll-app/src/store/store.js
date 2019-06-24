import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        poll: '',
        answers: [
        ],
    },
    mutations: {
        // Set poll title
        appendPoll: state => {
            let pollTitle = document.getElementById("pollTitle").value;
            state.poll = pollTitle
        },
        // Set new Answer in answers array
        appendAnswer: (state, payload) => {
            state.answers.push(payload);
        },
        //resets the form
        resetForm: state => {
            state.poll = "";
            state.answers = [];
        }
    },
    actions: {
        // Activates appendPoll in mutations
        appendPoll: context => {
            context.commit('appendPoll')
        },
        // Activates appendAnswer in mutations
        appendAnswer: (context, payload) => {
            context.commit('appendAnswer', payload)
        },
        resetForm: context => {
            context.commit('resetForm')
        }
    }
})