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
            return state.poll;
        },

        /* (state) => (id) => {
    return state.todos.find(todo => todo.id === id) */
        // Get answers from store
        answers: state => (id) => {
            // check if array exist
            return 
            
        }
    },
    mutations: {
        //Create new answer option
        createAnswer: (state, pollAnswer) => {
            let id = state.answers.length;
            state.answers.push({ id: id, answer: pollAnswer });
            console.log(state.answers);
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
        },
        // Activates appendAnswer in mutations
        appendAnswer: (context, changeAnswer, index) => {
            context.commit('appendAnswer', changeAnswer, index)
        },
        deleteAnswer: (context, payload) => {
            context.commit('deleteAnswer', payload)
        },
        resetForm: context => {
            context.commit('resetForm')
        }
    }
})