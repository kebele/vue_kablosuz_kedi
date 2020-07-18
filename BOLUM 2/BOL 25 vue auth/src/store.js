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
                //ls deki expirtionDate i alacağız
                let expirationDate = localStorage.getItem("expirationDate")
                //şu andaki zaman
                let time = new Date().getTime()
                //token ın süresi geçmiş mi... 
                if(time >= +expirationDate){
                    console.log("token süresi geçmiş")
                    dispatch("logout")
                } else {
                    //süre geçmemiş se token ı set edecek ve anasayfaya yönlendirecek
                    commit('setToken', token)
                    //eğer ls de token varsa bununla state i güncelle ve anasayfaya git
                    //aradaki kalan zamanın atanması, refresh durumunda kalan zaman
                    let timerSecond = +expirationDate - time
                    //burada yani zaman geçmemişse timer da çalışsın, 
                    // dispatch("setTimeoutTimer", 10000)
                    console.log(timerSecond)
                    dispatch("setTimeoutTimer", timerSecond)
                    router.push("/")

                }

                
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
        //   console.log(response.data);
          commit('setToken', response.data.idToken)
          localStorage.setItem("token", response.data.idToken)
          localStorage.setItem("expiretionDate", new Date().getTime() + +response.data.expiresIn * 1000)
        //asıl çalışacak kod yukarısı, aşağıdaki deneme amaçlı
        //   localStorage.setItem("expirationDate", new Date().getTime() + 10000)


          dispatch("setTimeoutTimer", +response.data.expiresIn * 1000) //saatlik yapmak içn
        //   dispatch("setTimeoutTimer", 10000) //şimdilik süreyi 5 sn yapalım denemek için

        });
      // console.log(this.user)
        },
        logout({ commit, dispatch, state }){
            commit("clearToken")
            localStorage.removeItem("token")
            localStorage.removeItem("expirationDate")
            router.replace("/auth") //bunun yri burası olacak önce tokenları halledecek sonra yönlenecek sıralama önemli
        },

        setTimeoutTimer({dispatch},expiresIn){
            setTimeout(()=>{
                dispatch("logout")
            }, expiresIn)
        }
    },
    getters : {
        isAuthenticated(state){
            return state.token !== ""
        }
    },
})

export default store