const state = {
    counter : 0,
}

const getters = {
    getDoubleCounter(state){
        return state.counter * 2;
    },
    stringCounter(state){
        return state.counter + " kere tıklandı"
    }
}

const mutations = {
    increaseCounter(state, payload){
        // state.counter ++
        state.counter += payload
    },
    decreaseCounter(state){
        state.counter --
    }
}

const actions = {
    increment({commit}, payload){
        commit("increaseCounter", payload)
    },
    decrement({commit}){
        commit("decreaseCounter")
    },
    incAsync({commit}, payload){
        setTimeout(() => {
            commit("increaseCounter", 5)
        }, payload.time);
    }
}

export default {
    //ister state : state veya başka bir isim ile de export edebiliriz, istersekte aynı ifadeye atayacaksak altta yaptığımız gibide yazabiliriz
    state : state,
    getters,
    mutations,
    actions
}