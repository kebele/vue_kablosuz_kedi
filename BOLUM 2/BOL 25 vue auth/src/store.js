import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from './router'

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

        initAuth({commit, dispatch}){
            // alert("1243")
            let token = localStorage.getItem("token");
            if(token){
                commit('setToken', token)
                //eğer ls de token varsa bununla state i güncelle ve anasayfaya git
                router.push("/")
            } else {
                //eğer token yoksa o zaman auth sayfasına göndersin bizi
                router.push("/auth")
                return false
                //aşağıya inmesin diye
            }
        },

        login({ commit, dispatch, state }, authData){
            //sign up url si
      // axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]")

    //signin url si
    //   https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

    let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="

    if(authData.isUser){
        authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
    }
      return axios
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
          commit('setToken', response.data.idToken)
          localStorage.setItem("token", response.data.idToken)
        });
      // console.log(this.user)
        },
        logout({ commit, dispatch, state }){
            commit("clearToken")
            localStorage.removeItem("token")
        }
    },
    getters : {
        isAuthenticated(state){
            return state.token !== ""
        }
    },
})

export default store