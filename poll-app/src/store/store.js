import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        poll: '',
        answers: []
    },
    getters: {
        // Get poll title from store
        poll: state => {
            return state.poll;
        },
        // Get answers from store
        answers: state => {
            return state.answers;
        }
    },
    mutations: {
        //Create new answer option
        createAnswer: state => {
            state.answers.push('');
        },
        // Set poll title
        appendPoll: state => {
            let pollTitle = document.getElementById("pollTitle").value;
            state.poll = pollTitle
        },
        // Set new Answer in answers array
        appendAnswer: state => {
            let answerField = document.getElementById("answerField").value;
            state.answers = answerField;
           // console.log(payload);
          
            
        },
        deleteAnswer: (state, payload) => {
            state.answers.splice(payload)
        },
        //resets the form
        resetForm: state => {
            state.poll = "";
            state.answers = [];
        }
    },
    actions: {
        //Activate createAnswer in mutations
        createAnswer: (context) => {
            context.commit('createAnswer')
        },
        // Activates appendPoll in mutations
        appendPoll: context => {
            context.commit('appendPoll')
        },
        // Activates appendAnswer in mutations
        appendAnswer: context => {
            context.commit('appendAnswer')
        },
        deleteAnswer: (context, payload) => {
            context.commit('deleteAnswer', payload)
        },
        resetForm: context => {
            context.commit('resetForm')
        }
    }
})