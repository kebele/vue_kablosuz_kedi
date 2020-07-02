import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        counter : 0,
        value : 0
    },
    getters : {
        getDoubleCounter(state){
            return state.counter * 2;
        },
        stringCounter(state){
            return state.counter + " kere tıklandı"
        },
        getValue(state){
            return state.value;
        }
    },
    mutations : {
        // updateCounter(state, value){
        //     state.counter += value
        // }
        increaseCounter(state, payload){
            // state.counter ++
            state.counter += payload
        },
        decreaseCounter(state){
            state.counter --
        },
        setValue(state, payload){
            state.value = payload
        }
    },
    actions : {
        increment({commit}){
            commit("increaseCounter")
        },
        decrement({commit}){
            commit("decreaseCounter")
        },
        incAsync({commit}, payload){
            setTimeout(() => {
                commit("increaseCounter", 5)
            }, payload.time);
        },
        setValueData({ commit }, payload){
            commit("setValue", payload);
        }
    }
});