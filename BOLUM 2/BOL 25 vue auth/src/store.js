import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
            //sign up url si
      // axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]")

    //signin url si
    //   https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

    if(authData.isUser){
        authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }
      axios
        .post(
          authLink + "AIzaSyBFzLWgJ-gMByLLwuvwkBVbxcdAkGu9wKg",
          {
            // email: this.user.email,
            email: authData.email,
            // password: this.user.password,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          console.log(response);
        });
      // console.log(this.user)
        },
        logout({ commit, dispatch, state }){

        }
    },
    getters : {

    },
})

export default store