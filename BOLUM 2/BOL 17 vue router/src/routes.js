import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Header from './components/user/Header.vue'

export const routes = [
    // { path : '', component : Home, name : 'anasayfa'},
    //aşağıdaki named router views için düzenlenmiş hali
    { path : '/', name : 'anasayfa', components : { default : Home, "header-top" : Header }},
    // { path : '/user/:id', component : User , name : 'kullanici'}
    // { path : '/user', component : User , name : 'kullanici', children : [
        //aşağısi named router views için düzenledim
    { path : '/user', name : 'kullanici', 
        components : {
            default : User,
            // "header-bottom" : Header
            "header-top" : Header
        },
        children : [
        {path : '', component : UserStart}, //user geldiğinde
        {path : ':id', component : UserDetail, beforeEnter : (to, from, next)=> {
            console.log("route seviyesinde giriş kontrolü")
            next();
            //route seviyesinde kontrol, eğer next() koymazsak route ilerlemez
        }}, //user/12 geldiğinde
        {path : ':id/edit', component : UserEdit, name : "userEdit"}, //user/12/edit geldiğinde
    ]},
    { path : "/redirect", redirect : "/user"},
    { path : "*", redirect : "/"}
]

