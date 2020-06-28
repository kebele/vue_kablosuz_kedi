import Home from './components/Home.vue'
import User from './components/user/User.vue'
import UserStart from './components/user/UserStart.vue'
import UserDetail from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'

export const routes = [
    { path : '', component : Home, name : 'anasayfa'},
    // { path : '/user/:id', component : User , name : 'kullanici'}
    { path : '/user', component : User , name : 'kullanici', children : [
        {path : '', component : UserStart}, //user geldiğinde
        {path : ':id', component : UserDetail}, //user/12 geldiğinde
        {path : ':id/edit', component : UserEdit, name : "userEdit"}, //user/12/edit geldiğinde

    ]}
]

