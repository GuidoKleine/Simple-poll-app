import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        poll: '',
        answers: [
        ]
    },
    getters: {
        // Get poll title from store
        poll: state => {
            return state.poll
        },

        answers: state => {
            return state.answers
        }
    },
    mutations: {
        //Create new answer option
        createAnswer: (state, pollAnswer) => {
            let id = state.answers.length;
            if (pollAnswer === null) {
                state.answers.push({ id: id, answer: "Please change to an answer!" });
            } else {
                state.answers.push({ id: id, answer: pollAnswer });
            }
        
        },
        // Set poll title
        appendPoll: (state, pollTitle) => {
            state.poll = pollTitle
        },
        // Set new Answer in answers array
        appendAnswer: (state, changeAnswer) => {
            state.answers.answer = changeAnswer
        },
        deleteAnswer: (state, payload) => {
            state.answers.delete(payload)
        },
        //resets the form
        resetForm: state => {
            state.poll = "";
            state.answers = [];
        }
    },
    actions: {
        //Activate createAnswer in mutations
        createAnswer: (context, pollAnswer) => {
            context.commit('createAnswer', pollAnswer)
            
        },
        // Activates appendPoll in mutations
        appendPoll: (context, pollTitle) => {
            context.commit('appendPoll', pollTitle)
            document.getElementById("pollTitle").value = ""
        },
        // Activates appendAnswer in mutations
        appendAnswer: (context, changeAnswer) => {
            context.commit('appendAnswer', changeAnswer)
        },
        deleteAnswer: (context, payload) => {
            context.commit('deleteAnswer', payload)
        },
        resetForm: context => {
            context.commit('resetForm')
        }
    }
})