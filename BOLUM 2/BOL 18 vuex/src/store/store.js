import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 0
    },
    getters : {
        getDoubleCounter(state){
            return state.counter * 2;
        },
        stringCounter(state){
            return state.counter + " kere tıklandı"
        }
    },
    mutations : {
        // updateCounter(state, value){
        //     state.counter += value
        // }
        increaseCounter(state){
            state.counter ++
        },
        decreaseCounter(state){
            state.counter --
        }
    }
});