import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import * as mutations from './mutations'
//bunun anlamı mutatins daki her şeyi mutations olarak getir
// bu şekilde yaptığımızda import ettiğimiz şeyin veti tip object oluyor, aşağıdaki de object olduğu için mutations, şeklinde kullanabilir hale geliyoruz
import * as getters from './getters'
import * as actions from './actions'


Vue.use(Vuex);
/* **************
AŞAĞIDAKİ YORUMA ALDIĞIM kısımlar modules kullanımı için bölünen kısımlar, modules te counter.js ve value.js e gittiler
****************** */
export const store = new Vuex.Store({
    state : {
        // counter : 0, 
        value : 0
    },
    // getters : {
        // getDoubleCounter(state){
        //     return state.counter * 2;
        // },
        // stringCounter(state){
        //     return state.counter + " kere tıklandı"
        // },
        // getters.js e gitti
        // getValue(state){
        //     return state.value;
        // }
    // },
    getters : getters,
    // mutations : {
        // updateCounter(state, value){
        //     state.counter += value
        // }
        // increaseCounter(state, payload){
        //     // state.counter ++
        //     state.counter += payload
        // },
        // decreaseCounter(state){
        //     state.counter --
        // },

        //mutations.js e gitti
        // setValue(state, payload){
        //     state.value = payload
        // }
    // },
    mutations : mutations,
    // actions : {
        // increment({commit}){
        //     commit("increaseCounter")
        // },
        // decrement({commit}){
        //     commit("decreaseCounter")
        // },
        // incAsync({commit}, payload){
        //     setTimeout(() => {
        //         commit("increaseCounter", 5)
        //     }, payload.time);
        // },
        //actionsjs e gitti
        // setValueData({ commit }, payload){
        //     commit("setValue", payload);
        // }
    // },
    actions : actions,
    modules : {
        //counter.js import edilecek sonra, 
        counter : counter
    }
})