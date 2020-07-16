import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        token : "",
        fbAPIKey : "AIzaSyBFzLWgJ-gMByLLwuvwkBVbxcdAkGu9wKg",
    },
    mutations : {
        setToken(state, token){
            state.token = token
        },
        clearToken(state){
            state.token = ""
        }
    },
    actions : {
        login({ commit, dispatch, state }, authData){

        },
        logout({ commit, dispatch, state }){

        }
    },
    getters : {

    },
})

export default store